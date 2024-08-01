import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { FaCloudDownloadAlt, FaSearch, FaShareAlt, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import logo from '@/assets/Logo.png';
interface HeaderWrapperProps {
  scrolled: boolean;
}

interface HeaderProps {
  searchQuery?: string;
}
export const Header = ({ searchQuery }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState(searchQuery || '');
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${query}`);
  };
  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [searchQuery]);

  return (
    <HeaderWrapper scrolled={scrolled}>
      <Inner>
        <Logo onClick={() => navigate('/')}>
          <Image src={logo} alt="Logo" />
          DreamStore Hub
        </Logo>
        <SearchBar onSubmit={handleSearch}>
          <Input
            value={query}
            placeholder="search anything !!"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button type="submit">
            <FaSearch size={24} color="FFBA00" />
          </Button>
        </SearchBar>
        <Icons>
          <FaShareAlt size={26} color="FFBA00" />
          <FaUserCircle size={28} color="FFBA00" />
          <FaCloudDownloadAlt size={28} color="FFBA00" />
        </Icons>
      </Inner>
    </HeaderWrapper>
  );
};
const HeaderWrapper = styled.header<HeaderWrapperProps>`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 130px;
  background-color: ${({ scrolled }) => (scrolled ? '#fdf0d2d8' : 'white')};
  transition: background-color 0.2s;
  padding: 40px 50px;
  font-size: 14px;
`;
const Inner = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  padding: 6px;
  display: flex;
  justify-content: center;
  gap: 4px;
  color: #f4b10b;
  line-height: 20px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
`;
const SearchBar = styled.form`
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
  margin-right: 10px;
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
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  cursor: pointer;
`;
