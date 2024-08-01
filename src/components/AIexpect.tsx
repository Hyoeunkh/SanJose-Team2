import styled from '@emotion/styled';

export const AIexpect = () => {
  return (
    <GoodsItemWrapper>
      <GoodsDescription></GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  max-width: 450px;
  position: relative;
  text-align: center;
  color: #2d2d2d;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 0 2px #ffbb00d0;
    text-decoration: none;
  }
`;
const GoodsDescription = styled.div`
  width: 100%;
  padding-top: 10px;
  word-break: break-word;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
`;
