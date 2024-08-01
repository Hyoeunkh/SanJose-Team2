import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { AIexpect } from './AIexpect';

export const OptionAndOrder = () => {
  const navigate = useNavigate();
  return (
    <OptionWrapper>
      <AIexpect />
      <Button variant="warning" size="lg" onClick={() => navigate('/option')}>
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
  width: 700px;

  margin-top: 20px;

  button {
    color: white;
  }
`;
