import 'react-circular-progressbar/dist/styles.css';

import styled from '@emotion/styled';
import { ProgressBar } from 'react-bootstrap';
import { CircularProgressbar } from 'react-circular-progressbar';

export const AIexpect = () => {
  const percentage = 56.21;

  return (
    <GoodsItemWrapper>
      <Title>AI PREDICTED SUCCESS RATE IS !</Title>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={{
          root: { width: '130px', margin: '20px auto 40px' },
          path: {
            stroke: `rgb(255, 186, 0)`,
            strokeLinecap: 'butt',
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(0.44turn)',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#e3e3e3',
            strokeLinecap: 'butt',
            transform: 'rotate(0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: 'rgb(51, 40, 14)',
            fontSize: '16px',
            fontWeight: 'bold',
          },
          background: {
            fill: '#FFBA00',
          },
        }}
      />
      <GoodsDescription>
        <Section>
          <ProgressBar now={57} variant="warning" />
          <h4>'modern' design concept</h4>
        </Section>
        <Section>
          <ProgressBar now={46} variant="warning" />
          <h4>budget of 50000.0</h4>
        </Section>
        <Section>
          <ProgressBar now={30} variant="warning" />
          <h4>average review rating of 3.19</h4>
        </Section>
      </GoodsDescription>
    </GoodsItemWrapper>
  );
};

const GoodsItemWrapper = styled.div`
  max-width: 520px;
  text-align: center;
  color: #2d2d2d;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(0deg, #f2b00a 54%, #f8003b 100%);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 10px;
  padding: 30px 20px;
  margin-bottom: 20px;
`;
const Title = styled.h4`
  font-size: 20px;
  font-weight: bold;
`;
const GoodsDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  align-items: center;
`;
const Section = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 18px;
    padding: 2px;
  }
`;
