import { Route, Routes } from 'react-router-dom';

import SearchPage from './pages/SearchPage';

import { MainLayout } from '@/components/common/MainLayout';
import DetailPage from '@/pages/DetailPage';
import MainPage from '@/pages/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index path="/" element={<MainPage />} />
        <Route path="/search" element={<SearchPage />} />;
        <Route path="/detail" element={<DetailPage />} />;
      </Route>
    </Routes>
  );
};
export default App;
