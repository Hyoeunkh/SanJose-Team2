import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SplitLayout } from '@/components/common/SplitLayput';
import { GoodsDetailItem } from '@/components/Detail/GoodsDetailItem';
import { OptionAndOrder } from '@/components/Detail/OptionAndOrder';
import { goodsDetailItems } from '@/constant/GoodsItems';

export default function DetailPage() {
  const location = useLocation();
  const type = location?.state?.item;

  const items = goodsDetailItems;
  const item = type.type === 'CAFE' ? items[0] : items[1];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SplitLayout sidebar={<OptionAndOrder />}>
      <Wrapper>
        <GoodsDetailItem
          key={item.key}
          imageSrc={item?.imageSrc}
          name={item?.name}
          title={item?.title}
          star={item?.star}
          amount={item?.amount}
          concept={item?.concept}
          location={item?.location}
          hour={item?.hour}
          marketing={item?.marketing}
          age={item?.age}
          type={item?.type}
        />
        <Space />
      </Wrapper>
    </SplitLayout>
  );
}
const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
`;

const Space = styled.div`
  max-width: 1440px;
  height: 8px;
  background-color: #ededed;
`;
