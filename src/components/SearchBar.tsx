import styled from '@emotion/styled';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  defaultValue?: string;
}

export const SearchBar = ({ defaultValue = '' }: SearchBarProps) => {
  return (
    <SearchBarWrapper>
      <Input defaultValue={defaultValue} placeholder="search anything" aria-label="Search" />
      <Button type="submit">
        <FaSearch size={24} color="FFBA00" />
      </Button>
    </SearchBarWrapper>
  );
};

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
`;

const Input = styled.input`
  padding: 20px;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(0deg, #f2b00a 54%, #f8003b 100%);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 4px;
  margin-right: 4px;
  width: 80%;
  height: 50px;
  font-size: 1.1em;
  :focus {
    outline: none;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
