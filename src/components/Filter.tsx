import styled from '@emotion/styled';

import { Container } from './common/Container';

export interface IChangeFilter {
  filter: string;
  changeFilter: (text: string) => void;
}
export interface IText {
  targetValue: string;
  text: string;
  onClick?: () => void;
}
export const Filter = ({ filter, changeFilter }: IChangeFilter) => {
  return (
    <FilterWrapper>
      <Container flexDirection="column" maxWidth="1440px">
        <List>
          <Text targetValue={filter} text={'CAFE'} onClick={() => changeFilter('CAFE')}>
            CAFE
          </Text>
          <Text targetValue={filter} text={'RESTAURANT'} onClick={() => changeFilter('RESTAURANT')}>
            RESTAURANT
          </Text>
          <Text targetValue={filter} text={'FUNDING'} onClick={() => changeFilter('FUNDING')}>
            FUNDING
          </Text>
        </List>
      </Container>
    </FilterWrapper>
  );
};
const FilterWrapper = styled.div`
  width: 100%;
`;
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Text = styled.p<Pick<IText, 'targetValue' | 'text'>>`
  width: calc(1440 / 3);
  font-size: 20px;
  font-weight: ${(props) => (props.targetValue === props.text ? 'bold' : '400')};
  padding: 16px 0px;
  background-color: ${(props) => (props.targetValue === props.text ? '#FDF0D2' : 'white')};
  border-radius: 10px 10px 0px 0px;
  text-align: center;
  transition:
    background-color 0.1s,
    font-weight 0.1s;
  width: 100%;
  cursor: pointer;
`;
