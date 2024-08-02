import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import Slider from 'react-slick';

import { GoodsItem } from './common/GoodsItem';

import MainLogo from '@/assets/MainLogo.png';
import rest1 from '@/assets/rest1.png';
import rest2 from '@/assets/rest2.png';

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      <SlideWrapper key={1}>
        <Caption>
          <img src={MainLogo} alt="mainlogo" />
          <div>
            <h1>
              Welcome to DreamStoreHub!
              <br /> Get ideas, get inspired. Dream your store!
              <br />
            </h1>
            <span>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</span>
          </div>
        </Caption>
      </SlideWrapper>
      <SlideWrapper key={2}>
        <Caption>
          <Input placeholder="search anything !!" aria-label="Search" />
          <div>
            <h1>
              Search Everything!
              <br />
              Find the design you want
              <br />
            </h1>
          </div>
        </Caption>
      </SlideWrapper>
      <SlideWrapper key={3}>
        <GoodsItem key={1} imageSrc={rest1} star={4.9} name="Zac Brown" title="Eclipse Dining" amount="200,000" />
        <GoodsItem key={2} imageSrc={rest2} star={4.7} name="Hyoki, Lee" title="Urban Plate" amount="220,000" />
        <Caption>
          <h3>Let's get some ideas, Get started now!</h3>
        </Caption>
      </SlideWrapper>
    </Slider>
  );
};

const SlideWrapper = styled.div`
  position: relative;
  text-align: center;
`;

const Caption = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: #ffba00;
  padding: 10px;
  border-radius: 5px;
`;
const Input = styled.input`
  padding: 20px;
  border: 1px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(0deg, #f2b00a 54%, #f8003b 100%);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 4px;
  margin-right: 10px;
  width: 80%;
  height: 50px;
  font-size: 1.1em;
  :focus {
    outline: none;
  }
`;
