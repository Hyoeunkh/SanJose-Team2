import styled from '@emotion/styled';
import { Button } from 'react-bootstrap';

import { AIexpect } from './AIexpect';

export const OptionAndOrder = () => {
  return (
    <OptionWrapper>
      <AIexpect />
      <Button variant="success">Purchase</Button>
    </OptionWrapper>
  );
};

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 800px;
`;
