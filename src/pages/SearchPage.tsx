import styled from '@emotion/styled';
import { useEffect } from 'react';

import { ItemSection } from '@/components/ItemSection';

export default function SearchPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SearchWrapper>
      <Space />
      <Space />
      <SearchNature>
        We found 10+ results for <span>"nature"</span>
      </SearchNature>
      <ItemSection />
    </SearchWrapper>
  );
}
const SearchWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
`;
const SearchNature = styled.div`
  margin: 0 auto;
  font-size: 20px;
  font-weight: 400;
  span {
    font-weight: bold;
  }
`;
const Space = styled.div`
  height: 30px;
  max-width: 1440px;
`;
