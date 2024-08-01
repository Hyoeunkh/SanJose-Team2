import styled from '@emotion/styled';

import JohnImg from '@/assets/JohnImg.webp';
import SarahImg from '@/assets/SharaImg.avif';

export const SuccessStory = () => {
  return (
    <Services>
      <h2>SUCCESS STORY</h2>
      <P>
        Sarah, a talented designer, joined DreamStoreHub and quickly caught the attention of John, an entrepreneur, with
        her unique café concepts.
      </P>
      <ServiceCards>
        <h3 className="sh">Sarah's Journey</h3>
        <ServiceCard className="scard">
          <Img>
            <img className="sarah" src={SarahImg} />
          </Img>
          <div>
            <span>• Listed Her Designs</span> <br />
            Sarah uploaded her café design concepts on DreamStoreHub, detailing the unique features and aesthetic
            appeal.
            <br />
            <span>• Connected with Buyers</span>
            <br /> John discovered Sarah's designs and was impressed by the creativity and practicality.
            <br />
            <span>• Successful Sale</span>
            <br /> John purchased one of Sarah's designs, leading to a successful business partnership.
          </div>
        </ServiceCard>
        <h3 className="jh">John's Journey</h3>
        <ServiceCard className="jcard">
          <div>
            <span>• Found Inspiration</span>
            <br /> John explored various designs on DreamStoreHub and found the perfect match in Sarah's concepts.
            <br />
            <span>• Started His Business</span>
            <br /> Using Sarah's design, John launched his café, attracting customers with its unique and appealing
            look.
            <br />
            <span>• Achieved Success</span>
            <br /> Within months, John's café became a local favorite, significantly boosting his earnings.
          </div>{' '}
          <Img>
            <img className="john" src={JohnImg} />
          </Img>
        </ServiceCard>
      </ServiceCards>
    </Services>
  );
};

const Services = styled.section`
  text-align: center;
  padding: 60px;
  width: 1902px;
  height: 1000px;
  h2 {
    color: #2c4964;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
`;
const P = styled.p`
  color: #535353;
  margin-bottom: 2rem;
`;
const ServiceCards = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 80px;
  .scard {
    left: 100px;
    top: 50px;
  }
  .jcard {
    right: 100px;
    top: 400px;
  }
  h3 {
    position: absolute;
    color: #2c4964;
    margin-bottom: 0.5rem;
    font-size: 30px;
    font-weight: 600;
  }
  .sh {
    top: 0;
    left: 100px;
    padding-left: 10px;
    border-left: 2px solid #2c4964;
  }
  .jh {
    padding-right: 10px;
    border-right: 2px solid #2c4964;
    top: 350px;
    right: 100px;
  }
`;
const ServiceCard = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  padding: 60px 26px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  text-align: start;
  align-items: center;
  justify-content: center;
  gap: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 200px;
  }
  .john {
    transform: scale(1.2);
  }
  .sarah {
    height: 150px;
  }

  span {
    font-size: 22px;
    font-weight: 600;
    color: #444444;
    margin: 0;
  }
  div {
    color: #4d4d4d;
    font-size: 18px;
    margin: 0;
  }
`;
const Img = styled.div`
  width: 200px;
  border-radius: 50%;

  aspect-ratio: 1.3;
  overflow: hidden;

  margin-bottom: 1rem;
  text-align: center;
`;
