import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import { GoodsDetailItem } from '@/components/GoodsDetailItem';
import { GoodsInfo } from '@/components/GoodsInfo';
import { OptionAndOrder } from '@/components/OptionAndOrder';
import { SplitLayout } from '@/components/SplitLayput';

export default function DetailPage() {
  const location = useLocation();
  const item = location?.state?.item;
  return (
    <SplitLayout sidebar={<OptionAndOrder />}>
      <Wrapper>
        <GoodsDetailItem
          key={item?.id}
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
        <GoodsInfo />
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
  padding: 20px 0px;
`;

const Space = styled.div`
  max-width: 1440px;
  height: 8px;
  background-color: #ededed;
`;
