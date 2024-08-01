import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styled from '@emotion/styled';
import Slider from 'react-slick';

import carousel1 from '@/assets/carousel1.png';
import carousel2 from '@/assets/carousel2.png';
import carousel3 from '@/assets/carousel3.png';

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
        <img src={carousel1} alt={`slide-1`} width={100} />
        <Caption>
          <h3>
            Welcome to DreamStoreHub!
            <br /> Get ideas, get inspired. Dream your store!
          </h3>
          <p>
            DreamStoreHub is your one-stop platform for buying and selling innovative ideas and design concepts.
            <br />
            Whether you're an aspiring entrepreneur or an established business owner, our marketplace empowers you to
            turn your dreams into reality. <br />
            We connect creative minds with those seeking unique business solutions, fostering a community of innovation
            and success.
          </p>
        </Caption>
      </SlideWrapper>
      <SlideWrapper key={2}>
        <img src={carousel2} alt={`slide-2`} />
        <Caption>
          <h3>Why Choose DreamStoreHub?</h3>
          <p>
            Innovative Ideas: Discover unique and creative concepts tailored for your business needs. <br />
            Expert Designs: Access high-quality designs created by talented professionals. <br />
            Community Support: Join a network of like-minded individuals passionate about innovation and
            entrepreneurship. <br />
            Success Stories: Be inspired by success stories like Sarah and John, showcasing the potential of our
            platform.
          </p>
        </Caption>
      </SlideWrapper>
      <SlideWrapper key={3}>
        <img src={carousel3} alt={`slide-3`} />
        <Caption>
          <h3>Let's get some ideas, Get started now!</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
`;
