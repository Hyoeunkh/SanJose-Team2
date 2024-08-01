import styled from '@emotion/styled';

import MainLogo from '@/assets/MainLogo.png';
export const MainText = () => {
  return (
    <AboutWrapper>
      <Inner>
        <img src={MainLogo} alt="mainlogo" />
        <div>
          <h1>
            Welcome to DreamStoreHub!
            <br /> Get ideas, get inspired. Dream your store!
            <br />
          </h1>
          <span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</span>
        </div>
      </Inner>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  text-align: right;
  padding: 80px;
  width: 1902px;
  background-color: #ffba00;
  h1 {
    color: white;
    font-weight: bold;

    margin-top: 10px;
  }
  button {
    border: 2px solid;
  }
  span {
    font-size: 16px;
  }
`;
const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 60px;

  margin-top: 20px;
  img {
    width: 120px;
    height: 120px;
  }
`;
