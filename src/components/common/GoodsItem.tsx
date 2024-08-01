import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

import type { Goods } from '@/constant/GoodsItems';

export const GoodsItem = ({ imageSrc, name, title, star, amount }: Goods) => {
  return (
    <GoodsItemWrapper>
      <Image src={imageSrc} width="100%" alt="goodsItem" />
      <GoodsDescription>
        <User>
          <GoodsItemName>
            <FaUserCircle size={22} color={'FFBA00'} />
            {name}
          </GoodsItemName>
          <GoodsItemStar>
            <span>★</span> {star}
          </GoodsItemStar>
        </User>
        <GoodsItemTitle>{title}</GoodsItemTitle>
        <GoodsItemAmout>
          <span>From $</span>
          {amount}
        </GoodsItemAmout>
      </GoodsDescription>
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
const User = styled.div`
  display: flex;
  gap: 4px;
  justify-content: space-between;
  padding: 10px 20px;
`;
const GoodsItemName = styled.div`
  color: #2c2c2c;
  font-size: 18px;
  white-space: nowrap;
  margin: 0;
  display: flex;
  svg {
    margin-right: 4px;
    margin-top: 2px;
  }
`;
const GoodsItemStar = styled.p`
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  span {
    color: #ffba00;
  }
`;
const GoodsItemTitle = styled.h5`
  font-size: 26px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  margin: 0;
  text-align: start;
`;
const GoodsItemAmout = styled.p`
  font-size: 20px;
  font-weight: 400;
  padding: 0px 20px 10px;
  text-align: end;
`;
