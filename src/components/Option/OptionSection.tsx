import styled from '@emotion/styled';
import { useState } from 'react';

import { Container } from '../common/Container';
import { Card } from './Card';

import { consultOptionItems, interiorOptionItems } from '@/constant/GoodsItems';

export const OptionSection = () => {
  const [selectedInterior, setSelectedInterior] = useState<number>();
  const [selectedConsult, setSelectedConsult] = useState<number>();

  const handleInteriorSelect = (index: number) => {
    setSelectedInterior(index);
  };

  const handleConsultSelect = (index: number) => {
    setSelectedConsult(index);
  };

  return (
    <OptionSectionWrapper>
      <Container flexDirection="column">
        <Title>Interior designer</Title>
        <Section>
          {interiorOptionItems.map((item, index) => (
            <CardWrapper key={index} onClick={() => handleInteriorSelect(index)}>
              <Card
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
                selected={selectedInterior === index}
              />
            </CardWrapper>
          ))}
        </Section>
        <Title>Consulting firms</Title>
        <Section>
          {consultOptionItems.map((item, index) => (
            <CardWrapper key={index} onClick={() => handleConsultSelect(index)}>
              <Card
                imgUrl={item.imgUrl}
                title={item.title}
                description={item.description}
                selected={selectedConsult === index}
              />
            </CardWrapper>
          ))}
        </Section>
      </Container>
    </OptionSectionWrapper>
  );
};

const OptionSectionWrapper = styled.div`
  max-width: 1100px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  a,
  a:visited {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }
`;

const CardWrapper = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
`;

const Title = styled.h4``;

const Section = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px 60px;
`;
