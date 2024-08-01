import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';

import type { GoodsDetail } from '@/constant/GoodsItems';

export const GoodsDetailItem = ({
  imageSrc,
  name,
  title,
  star,
  amount,
  concept,
  location,
  hour,
  marketing,
  age,
  type,
}: GoodsDetail) => {
  return (
    <GoodsItemWrapper>
      <Image src={imageSrc} width="60%" alt="goodsItem" />
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
        <Title>Design concept</Title>
        <Description>{concept}</Description>
        <Title>Required capital</Title>
        <Description>${amount}</Description>
        <Title>Preferred location</Title>
        <Description>{location}</Description>
        <Title>Operation Hour</Title>
        <Description>{hour}</Description>
        <Title>Marketing strategy</Title>
        <Description>{marketing}</Description>
        <Title>Target Age</Title>
        <Description>{age}</Description>
        <Title>Service type</Title>
        <Description>{type}</Description>
      </GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  max-width: 1100px;
  position: relative;
  text-align: center;
  color: #2d2d2d;
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
const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 0px 20px 10px;
  text-align: end;
`;
const Title = styled.h5`
  font-size: 22px;
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
