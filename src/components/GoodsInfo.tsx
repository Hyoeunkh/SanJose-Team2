import styled from '@emotion/styled';

export const GoodsInfo = () => {
  return (
    <Wrapper>
      <LabelText>Info</LabelText>
      <Space />
      <GoodsWrapper>
        <GoodsInfoWrapper>
          <h2>About this CAFE</h2>
          <GoodsInfoTextWrapper>
            <GoodsInfoTextTitle>aaa</GoodsInfoTextTitle>
          </GoodsInfoTextWrapper>
          <h2>I do voiceovers for: </h2>
          <GoodsInfoTextWrapper>
            <GoodsInfoTextTitle>abc</GoodsInfoTextTitle>
          </GoodsInfoTextWrapper>
          <h2>Please note!</h2>
          <GoodsInfoTextWrapper>
            <GoodsInfoTextTitle>bbb</GoodsInfoTextTitle>
          </GoodsInfoTextWrapper>
        </GoodsInfoWrapper>
      </GoodsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 16px;
`;
const LabelText = styled.span`
  font-size: 15px;
  line-height: 24px;
  font-weight: 700;
  color: #000;
`;
const Space = styled.div`
  max-width: 1440px;
  height: 8px;
  background-color: #ededed;
`;

const GoodsWrapper = styled.div`
  width: 100%;
  padding: 20px 16px 16px;
  border-radius: 8px;
  border: 1px solid #ededed;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
`;

const GoodsInfoWrapper = styled.div`
  display: flex;
`;

const GoodsInfoTextWrapper = styled.div`
  padding-left: 8px;
`;

const GoodsInfoTextTitle = styled.p`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  margin-top: 3px;
  color: #222;
  overflow: hidden;
  font-weight: 400;
`;
