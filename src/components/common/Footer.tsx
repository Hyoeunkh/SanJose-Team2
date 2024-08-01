/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Container } from './Container';

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
