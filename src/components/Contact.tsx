import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';

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
export const Contact = () => {
  return (
    <ContactWrapper>
      <Container flexDirection="row" maxWidth="1100px" justifyContent="space-between" alignItems="center">
        <img src="https://bootstrapmade.com/demo/templates/Arsha/assets/img/cta-bg.jpg"></img>
        <Text>
          <Title>CONTACT </Title>
          <Describtion>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br />
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Describtion>
        </Text>
        <Button variant="outline-warning">Contact Email</Button>
      </Container>
    </ContactWrapper>
  );
};
const ContactWrapper = styled.div`
  width: 1902px;
  background-color: #ffbb00e1;
  position: relative;
  padding: 120px 0px;
  clip-path: inset(0);
  img {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -99;
  }
  :before {
    content: '';
    background:
      var(#ffbb00),
      transparent 35%;
    z-index: -20;
    inset: 0;
    position: absolute;
  }
  button {
    margin-top: 20px;
    padding: 16px;
    font-size: 16px;
    border-radius: 16px;
    border: 2px solid;
    font-weight: bold;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.p`
  width: 100%;
  font-size: 22px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  color: white;
`;
const Describtion = styled.p`
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  color: white;
`;
