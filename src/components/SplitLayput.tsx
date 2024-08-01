import styled from '@emotion/styled';

import { Container } from './common/Container';

type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

export const SplitLayout = ({ children, sidebar }: Props) => {
  return (
    <Wrapper>
      <Container maxWidth={'1440px'}>
        <Inner>
          <Main>{children}</Main>
          <Sidebar>{sidebar}</Sidebar>
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;

const Main = styled.main`
  width: 100%;
  max-width: 900px;
`;

const Sidebar = styled.aside`
  display: none;
  position: sticky;
  top: 130px;
  width: 100%;
  max-width: 360px;
  height: calc(100vh - 130px);
`;
