import styled from '@emotion/styled';

import { AboutUs } from '@/components/AboutUs';
import { Carousel } from '@/components/Carousel';
import { Contact } from '@/components/Contact';
import { OurService } from '@/components/OurService';
import { SuccessStory } from '@/components/SuccessStory';

export default function MainPage() {
  return (
    <MainWrapper>
      <Space />
      <Carousel />
      <Space />
      <AboutUs />
      <OurService />
      <SuccessStory />
      <Contact />
    </MainWrapper>
  );
}
const MainWrapper = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

const Space = styled.div`
  height: 60px;
  max-width: 1440px;
`;
