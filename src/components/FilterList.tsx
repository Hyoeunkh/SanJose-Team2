/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { Container } from './common/Container';
import { GoodsItem } from './common/GoodsItem';
import { Grid } from './common/Grid';
import type { IChangeFilter } from './Filter';

import { goodsItems } from '@/constant/GoodsItems';

export const FilteredList = ({ filter }: Pick<IChangeFilter, 'filter'>) => {
  const filteredItems = goodsItems.filter((goods) => {
    return goods.type === filter;
  });

  return (
    <ListWrapper>
      <Container flexDirection="column" justifyContent="center" alignItems="center" maxWidth="1100px">
        <Grid
          columns={{ init: 2, md: 2 }}
          gap={40}
          css={css`
            padding: 10px 150px;
          `}
        >
          {filteredItems.map((item) => (
            <Link to="/detail" state={{ item: item }} key={item.key}>
              <GoodsItem
                key={item.key}
                imageSrc={item.imageSrc}
                star={item.star}
                name={item.name}
                title={item.title}
                amount={item.amount}
                type={item.type}
              />
            </Link>
          ))}
        </Grid>
      </Container>
    </ListWrapper>
  );
};
const ListWrapper = styled.div`
  width: 100%;
  a {
    text-decoration: none;
  }
`;
