import 'react-circular-progressbar/dist/styles.css';

import styled from '@emotion/styled';

import cafe2 from '@/assets/cafe2.png';
import cafe3 from '@/assets/cafe3.png';
import cafe4 from '@/assets/cafe4.png';

export const Recommends = () => {
  return (
    <GoodsItemWrapper>
      <Title>Recommends!</Title>
      <GoodsDescription>
        <Section>
          <img src={cafe2} />
          <h4>The Modern Sip</h4>
        </Section>
        <Section>
          <img src={cafe3} />
          <h4>Cafe Novo</h4>
        </Section>
        <Section>
          <img src={cafe4} />
          <h4>Eco Friendly cafe</h4>
        </Section>
      </GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  max-width: 420px;
  text-align: center;
  color: #2d2d2d;
  padding: 30px 70px;
`;
const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;
const GoodsDescription = styled.div`
  display: flex;
  gap: 26px;
  overflow: hidden;
  align-items: center;
  margin-top: 40px;
  overflow: hidden;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.div`
  display: flex;
  width: 230px;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: start;
  justify-content: center;
  overflow: hidden;
  scroll-snap-align: center;
  flex-shrink: 0;
  gap: 4px;

  h4 {
    color: #2c4964;
    font-size: 24px;
    font-weight: 600;
  }
`;
