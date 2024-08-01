import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';

import type { GoodsOption } from '@/constant/GoodsItems';

export const Card = ({ imgUrl, title, description, selected }: GoodsOption & { selected: boolean }) => (
  <CardWrapper selected={selected}>
    <Image src={imgUrl} width="100%" alt="goodsItem" />
    <h3>{title}</h3>
    <p>{description}</p>
  </CardWrapper>
);

const CardWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 60px 26px 80px;
  width: 320px;
  text-align: start;
  justify-content: center;
  gap: 8px;
  transition: transform 0.3s ease;
  background-color: ${({ selected }) => (selected ? '#fdf0d2d8' : 'white')};

  &:hover {
    transform: scale(1.01);
  }

  h3 {
    color: #2c4964;
    margin: 0.3rem 0px;
    font-size: 22px;
    font-weight: 600;
  }

  p {
    color: #444444;
    font-size: 16px;
    margin: 0;
    height: 60px;
  }
`;
