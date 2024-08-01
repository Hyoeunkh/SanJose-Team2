import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';

export const AboutUs = () => {
  return (
    <AboutWrapper>
      <h2>About Us</h2>
      <p>
        DreamStoreHub is your one-stop platform for buying and selling innovative ideas and design concepts. <br />
        Whether you're an aspiring entrepreneur or an established business owner, our marketplace empowers you to turn
        your dreams into reality. <br />
        We connect creative minds with those seeking unique business solutions, fostering a community of innovation and
        success.
      </p>
      <Button variant="outline-info">Read More</Button>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  text-align: center;
  padding: 80px;
  width: 1902px;
  h2 {
    color: #2c4964;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    color: #2a2a2a;
    margin-bottom: 2rem;
  }
  button {
    border: 2px solid;
  }
`;
