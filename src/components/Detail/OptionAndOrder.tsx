import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { AIexpect } from './AIexpect';
import { Recommends } from './Recommend';

export const OptionAndOrder = () => {
  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate('/option', { replace: true });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <OptionWrapper>
      <AIexpect />
      <Recommends />
      <Button variant="warning" size="lg" onClick={handlePurchase}>
        Purchase
      </Button>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 800px;

  margin-top: 20px;

  button {
    color: white;
  }
`;
