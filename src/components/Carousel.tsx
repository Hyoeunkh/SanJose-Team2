import styled from '@emotion/styled';
import Carousel from 'react-bootstrap/Carousel';

import carousel from '@/assets/carousel.png';

export const CarouselContainer = () => {
  return (
    <CarouselWrapper>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={carousel} width={100} />
          <CustomCaption first>
            <h3>
              Welcome to DreamStoreHub!
              <br /> Get ideas, get inspired. Dream your store!
            </h3>
            <p>
              DreamStoreHub is your one-stop platform for buying and selling innovative ideas and design concepts.
              <br />
              Whether you're an aspiring entrepreneur or an established business owner, our marketplace empowers you to
              turn your dreams into reality. <br />
              We connect creative minds with those seeking unique business solutions, fostering a community of
              innovation and success.
            </p>
          </CustomCaption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={carousel} width={100} />
          <CustomCaption seconde>
            <h3>Why Choose DreamStoreHub?</h3>
            <p>
              Innovative Ideas: Discover unique and creative concepts tailored for your business needs. <br />
              Expert Designs: Access high-quality designs created by talented professionals. <br />
              Community Support: Join a network of like-minded individuals passionate about innovation and
              entrepreneurship. <br />
              Success Stories: Be inspired by success stories like Sarah and John, showcasing the potential of our
              platform.
            </p>
          </CustomCaption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={carousel} width={100} />
          <CustomCaption>
            <h3>Let's get some ideas, Get started now!</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </CustomCaption>
        </Carousel.Item>
      </Carousel>
    </CarouselWrapper>
  );
};
const CarouselWrapper = styled.div`
  z-index: 10;
  width: 1902px;
  background-color: #ffbb00c7;
  border-radius: 10px;
  .carousel-item {
    max-width: 1100px;
    margin: 0 auto;
    transition: transform 0.5s ease;
  }

  .carousel-item img {
  }
  .carousel-indicators button {
    background-color: #e6e6e6;
    margin: 4px;
    padding: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
  }

  .carousel-indicators .active {
    background-color: #ffba00;
  }
  .carousel-control-prev,
  .carousel-control-next {
    width: 5%;
  }
  .visually-hidden {
    display: none; /* 텍스트 숨기기 */
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    color: #ffba00;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`;
const CustomCaption = styled(Carousel.Caption)<{ first?: boolean; seconde?: boolean }>`
  ${({ first }) =>
    first &&
    `
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    color: white;
  `}
  ${({ seconde }) =>
    seconde &&
    `
    padding: 20px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.5);
    width: 85%;
    color: white;
  `}
`;
