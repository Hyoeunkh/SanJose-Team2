import styled from '@emotion/styled';
import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import { Container } from './common/Container';
import { Filter } from './Filter';
import { FilteredList } from './FilterList';
interface ICategory {
  concept: string[];
  price: string[];
  age: string[];
}
const categories: { [key in keyof ICategory]: string[] } = {
  concept: ['character', 'nature', 'city', 'minimalist', 'vintage', 'signature'],
  price: ['~200000', '200000~250000', '250000~300000', '300000~350000', '400000~'],
  age: ['young_adults', 'adults', 'senior'],
};

export const ItemSection = () => {
  const [filter, setFilter] = useState('RESTAURANT');
  const [selectedCategory, setSelectedCategory] = useState<ICategory>({
    concept: [],
    price: [],
    age: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState<keyof ICategory | null>(null);

  const toggleDropdown = (category: keyof ICategory) => {
    setDropdownOpen(dropdownOpen === category ? null : category);
  };

  const handleCategoryChange = (category: keyof ICategory, value: string) => {
    setSelectedCategory((prevState) => {
      const currentCategory = prevState[category];
      if (currentCategory.includes(value)) {
        return {
          ...prevState,
          [category]: currentCategory.filter((item) => item !== value),
        };
      } else {
        return {
          ...prevState,
          [category]: [...currentCategory, value],
        };
      }
    });
  };

  const changeFilter = (text: string) => {
    setFilter(text);
  };

  return (
    <ItemSectionWrapper>
      <Container flexDirection="column" justifyContent="center" alignItems="center" maxWidth="1100px">
        <Filter filter={filter} changeFilter={changeFilter} />
        <CategorySelect>
          <Inner>
            {Object.keys(categories).map((category) => (
              <CategoryGroup key={category}>
                <CategoryLabel onClick={() => toggleDropdown(category as keyof ICategory)}>
                  {category} <IoIosArrowDown />
                </CategoryLabel>
                {dropdownOpen === category && (
                  <DropdownContent>
                    {categories[category as keyof ICategory].map((option) => (
                      <CategoryOption key={option}>
                        <StyledInput
                          type={'checkbox'}
                          id={`${category}-${option}`}
                          name={category}
                          value={option}
                          checked={selectedCategory[category as keyof ICategory].includes(option)}
                          onChange={(e) => handleCategoryChange(category as keyof ICategory, e.target.value)}
                        />
                        <label htmlFor={`${category}-${option}`}>{option}</label>
                      </CategoryOption>
                    ))}
                  </DropdownContent>
                )}
              </CategoryGroup>
            ))}
          </Inner>
        </CategorySelect>
        <FilteredList filter={filter} />
      </Container>
    </ItemSectionWrapper>
  );
};

const ItemSectionWrapper = styled.div`
  max-width: 1100px;
  margin-top: 40px;
  display: flex;
  a,
  a:visited {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
`;

const CategorySelect = styled.div`
  width: 1100px;
  margin: 0 auto;
  background-color: #fdf0d2;
  display: flex;
  justify-content: center;
`;
const Inner = styled.div`
  width: 800px;
  display: flex;
  padding-top: 60px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
const CategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const CategoryLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: #ffffff;
  padding: 10px 14px;
  border-radius: 5px;
  border: 1px solid #f4b10b;
  color: gray;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 6px;

  &:hover {
    background-color: #f4b10b;
    color: white;
  }
`;

const DropdownContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  z-index: 10;
  max-height: 250px;
  overflow-y: auto;
`;

const CategoryOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  input {
    margin-right: 10px;
  }
`;

const StyledInput = styled.input`
  width: 20px;
  height: 20px;
`;

export default ItemSection;
