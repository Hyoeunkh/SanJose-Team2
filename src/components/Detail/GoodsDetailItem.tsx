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
      <Image src={imageSrc} width="100%" alt="goodsItem" />
      <GoodsDescription>
        <User>
          <GoodsItemName>
            <FaUserCircle size={28} color={'FFBA00'} />
            {name}
          </GoodsItemName>
          <GoodsItemStar>
            <span>★</span> {star}
          </GoodsItemStar>
        </User>
        <GoodsItemTitle>{title}</GoodsItemTitle>
        <Space />
        <Title>Design concept</Title>
        <Description>{concept}</Description>
        <Title>Required capital</Title>
        <Description>${amount}</Description>
        <Title>Preferred location</Title>
        <Description>{location}</Description>
        <Title>Operation Hour</Title>
        <Description>
          {hour.map((item) => {
            return (
              <p>
                {item}
                <br />
              </p>
            );
          })}
        </Description>
        <Title>Marketing strategy</Title>
        <Description>
          {marketing.map((item) => {
            return (
              <p>
                {item}
                <br />
              </p>
            );
          })}
        </Description>
        <Title>Target Age</Title>
        <Description>
          {age.map((item) => {
            return (
              <p>
                {item}
                <br />
              </p>
            );
          })}
        </Description>
        <Title>Service type</Title>
        <Description>
          {type.map((item) => {
            return (
              <p>
                {item}
                <br />
              </p>
            );
          })}
        </Description>
      </GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  max-width: 900px;
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
  font-size: 20px;
  white-space: nowrap;
  margin: 0;
  display: flex;
  svg {
    margin-right: 8px;
    margin-top: 2px;
  }
`;
const Space = styled.hr`
  width: 95%;
  background-color: #dedede;
  margin: 6px 0px 20px 23px;
`;
const GoodsItemStar = styled.p`
  font-size: 18px;
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
  font-size: 18px;
  color: #000000;
  padding: 0px 20px 36px;
  text-align: start;
`;
const Title = styled.h5`
  font-size: 20px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  padding-left: 20px;
  padding-bottom: 4px;
  margin: 0;
  text-align: start;
`;
