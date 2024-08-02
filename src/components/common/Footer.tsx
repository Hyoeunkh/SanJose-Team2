/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Container } from './Container';

import footer1 from '@/assets/footer1.png';
import footer2 from '@/assets/footer2.png';
import footer3 from '@/assets/footer3.png';

export const Footer = () => {
  return (
    <Wrapper>
      <Container maxWidth="1440px" flexDirection="row" justifyContent="space-between">
        <p
          css={css`
            margin-top: 50px;
          `}
        >
          Silly Store Inc.
          <br />
          <br />
          <span
            css={css`
              color: gray;
            `}
          >
            Choeun Lee <br />
            Unhi Park <br />
            Jangwon Son <br />
            Hyoeun Lee <br />
            Heeseok Oh
          </span>
        </p>
        <ImgSection>
          <Img src={footer1} alt="footer1" />
          <Img src={footer2} alt="footer2" />
          <Img src={footer3} alt="footer3" />
        </ImgSection>
        <p
          css={css`
            margin-top: 180px;
            color: gray;
          `}
        >
          support@dreamstorehub.com
        </p>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  height: 260px;
  background-color: rgb(250, 250, 250);
`;
const Img = styled.img`
  height: 60%;
  aspect-ratio: auto;
`;
const ImgSection = styled.div`
  margin-top: 150px;
  display: flex;
  width: 300px;
  gap: 50px;
`;
