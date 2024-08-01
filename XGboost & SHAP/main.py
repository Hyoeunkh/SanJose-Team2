import pandas as pd
from sklearn.model_selection import train_test_split, GridSearchCV, cross_val_score
from sklearn.preprocessing import LabelEncoder, StandardScaler
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error
import numpy as np
import shap

x1 = input("interior_design_concept : ")
x2 = int(input("location_zip_code : "))
x3 = float(input("startup_budget : "))

data = pd.read_csv('updated_combined_dreamHub.csv')

print(data.dtypes)

# 'business_profit_rate' 열을 문자열로 변환한 후 퍼센트 기호 제거
data['business_profit_rate'] = data['business_profit_rate'].astype(str).str.rstrip('%').astype(float) / 100

label_encoder = LabelEncoder()
data['interior_design_concept'] = label_encoder.fit_transform(data['interior_design_concept'])

average_ratings = data.groupby(['location_zip_code', 'interior_design_concept'])['average_review_ratings'].mean().reset_index()
average_ratings.rename(columns={'average_review_ratings': 'avg_review_rating'}, inplace=True)

data = pd.merge(data, average_ratings, on=['location_zip_code', 'interior_design_concept'], how='left')

# 독립 변수와 종속 변수 분리
X = data[['interior_design_concept', 'location_zip_code', 'startup_budget', 'avg_review_rating']]
y = data['business_profit_rate']

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

X_train, X_test, y_train, y_test = train_test_split(X_scaled, y, test_size=0.2, random_state=42)

param_grid = {
    'n_estimators': [100, 200, 300],
    'learning_rate': [0.01, 0.1, 0.3],
    'max_depth': [3, 5, 7],
    'subsample': [0.8, 0.9, 1.0],
    'colsample_bytree': [0.8, 0.9, 1.0]
}

grid_search = GridSearchCV(XGBRegressor(), param_grid, cv=3, scoring='neg_mean_squared_error', verbose=1)
grid_search.fit(X_train, y_train)

best_model = grid_search.best_estimator_

cv_scores = cross_val_score(best_model, X_train, y_train, cv=5, scoring='neg_mean_squared_error')
print("Cross-Validation Scores:", cv_scores)
print("Mean CV Score:", np.mean(cv_scores))

best_model.fit(X_train, y_train)

y_pred = best_model.predict(X_test)

mse = mean_squared_error(y_test, y_pred)
print("Mean Squared Error:", mse)

new_data = pd.DataFrame({
    'interior_design_concept': [x1],
    'location_zip_code': [x2],
    'startup_budget': [x3]
})

new_data['interior_design_concept'] = label_encoder.transform(new_data['interior_design_concept'])

avg_rating = average_ratings[(average_ratings['location_zip_code'] == new_data['location_zip_code'][0]) & 
                             (average_ratings['interior_design_concept'] == new_data['interior_design_concept'][0])]['avg_review_rating']
if avg_rating.empty:
    new_data['avg_review_rating'] = data['average_review_ratings'].mean() 
else:
    new_data['avg_review_rating'] = avg_rating.values[0]

new_data_scaled = scaler.transform(new_data)

# 성공 확률 예측
success_rate = best_model.predict(new_data_scaled)
print("Predicted Success Rate:", success_rate)

success_rate_percentage = np.clip(success_rate * 100, 0, 100)
print("Predicted Success Rate (Percentage):", success_rate_percentage)

explainer = shap.Explainer(best_model)
shap_values = explainer(X_scaled)

new_shap_values = explainer(new_data_scaled)

def explain_shap_values(new_data, new_shap_values, feature_names, average_ratings, data):
    explanations = []
    for feature_name, shap_value in zip(feature_names, new_shap_values[0].values):
        if feature_name == 'interior_design_concept':
            design_concept = label_encoder.inverse_transform([new_data[feature_name].iloc[0]])[0]
            num_similar_concepts = len(data[(data['location_zip_code'] == new_data['location_zip_code'].iloc[0]) &
                                            (data['interior_design_concept'] == new_data[feature_name].iloc[0])])
            if num_similar_concepts > 0:
                if shap_value > 0:
                    explanations.append(f"The area has {num_similar_concepts} other businesses with the same '{design_concept}' design concept, which positively influences the success rate.")
                else:
                    explanations.append(f"The area has {num_similar_concepts} other businesses with the same '{design_concept}' design concept, which negatively influences the success rate.")
            else:
                if shap_value > 0:
                    explanations.append(f"The area has no other businesses with the same '{design_concept}' design concept, which positively influences the success rate.")
                else:
                    explanations.append(f"The area has no other businesses with the same '{design_concept}' design concept, which negatively influences the success rate.")
        elif feature_name == 'location_zip_code':
            explanations.append(f"The zip code '{new_data[feature_name].iloc[0]}' {'positively' if shap_value > 0 else 'negatively'} influences the success rate by {abs(shap_value):.2f}.")
        elif feature_name == 'startup_budget':
            explanations.append(f"The startup budget of {new_data[feature_name].iloc[0]} {'positively' if shap_value > 0 else 'negatively'} influences the success rate by {abs(shap_value):.2f}.")
        elif feature_name == 'avg_review_rating':
            explanations.append(f"The average review rating of {new_data[feature_name].iloc[0]:.2f} {'positively' if shap_value > 0 else 'negatively'} influences the success rate by {abs(shap_value):.2f}.")
    return explanations

explanations = explain_shap_values(new_data, new_shap_values, new_data.columns, average_ratings, data)
for explanation in explanations:
    print(explanation)
