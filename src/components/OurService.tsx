import styled from '@emotion/styled';
import { BsBroadcast } from 'react-icons/bs';
import { FaRegLightbulb } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import { TbWaveSawTool } from 'react-icons/tb';

import ServiceCard from './ServiceCard';

export const OurService = () => {
  const services = [
    {
      icon: <FaRegLightbulb size={36} />,
      title: 'Innovative Ideas',
      description: 'Discover unique and creative concepts tailored for your business needs',
    },
    {
      icon: <SiMaterialdesignicons size={36} />,
      title: 'Expert Designs',
      description: 'Access high-quality designs created by talented professionals',
    },
    {
      icon: <TbWaveSawTool size={44} />,
      title: 'Community Support',
      description: 'Join a network of like-minded individuals passionate about innovation and entrepreneurship',
    },
    {
      icon: <BsBroadcast size={38} />,
      title: 'Success Stories',
      description: 'Be inspired by success stories like Sarah and John, showcasing the potential of our platform',
    },
  ];

  return (
    <Services>
      <h2>SERVICES</h2>
      <p>Why Choose DreamStore Hub?</p>
      <ServiceCards>
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </ServiceCards>
    </Services>
  );
};

const Services = styled.section`
  text-align: center;
  padding: 60px;
  width: 1902px;
  background-color: #f5f6f8;
  h2 {
    color: #2c4964;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  p {
    color: #919191;
    margin-bottom: 2rem;
  }
`;

const ServiceCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;
