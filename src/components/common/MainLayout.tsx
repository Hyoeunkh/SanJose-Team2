import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 68px;
`;
export const MainLayout = () => {
  return (
    <>
      <Header searchQuery={location.pathname === '/search' ? 'nature' : ''} />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
