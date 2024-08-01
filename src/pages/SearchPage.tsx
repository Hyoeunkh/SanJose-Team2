import styled from '@emotion/styled';

import { ItemSection } from '@/components/ItemSection';

export default function SearchPage() {
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
  align-items: center;
  padding: 20px 0px;
`;
const SearchNature = styled.p`
  font-size: 32px;
  font-weight: 400;
  span {
    font-weight: bold;
  }
  text-align: start;
`;
const Space = styled.div`
  height: 40px;
  max-width: 1440px;
`;
