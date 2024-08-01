import styled from '@emotion/styled';
import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <ServiceCardWrapper>
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </ServiceCardWrapper>
);

const ServiceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 60px 26px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: start;
  justify-content: center;
  gap: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  .icon {
    color: #ffba00;
    margin-bottom: 1rem;
  }

  h3 {
    color: #2c4964;
    margin-bottom: 0.5rem;
    font-size: 24px;
    font-weight: 600;
  }

  p {
    color: #444444;
    font-size: 16px;
    margin: 0;
    height: 60px;
  }
`;
export default ServiceCard;
