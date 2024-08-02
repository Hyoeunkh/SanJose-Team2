import { FormControl, FormLabel, Switch } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

import { OptionSection } from '@/components/Option/OptionSection';

export default function OptionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <SwitchSection>
        <Title>Choose your Option!</Title>
        <SubTitle>Funding status</SubTitle>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="Venture-funding" mb="0">
            Venture funding
            <span>
              <br />
              We've secured $1M in venture funding.
            </span>
          </FormLabel>
          <Switch id="Venture-funding" size="lg" colorScheme="yellow" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="Angel-investment" mb="0">
            Angel investment
            <span>
              <br />
              We've received $500K in angel investments.
            </span>
          </FormLabel>
          <Switch id="Angel-investment" size="lg" colorScheme="yellow" />
        </FormControl>
      </SwitchSection>
      <OptionSection />
      <Space />
      <Button variant="outline-warning" size="lg">
        Purchase
      </Button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 1902px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0px;
  background-color: #f5f6f8;
`;
const Title = styled.h2`
  margin-bottom: 40px;
`;
const SubTitle = styled.h4``;
const Space = styled.div`
  max-width: 1440px;
  height: 8px;
  background-color: #ededed;
`;
const SwitchSection = styled.div`
  margin: 10px auto;
  width: 950px;
  align-items: start;
  div {
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
  }
  label {
    font-size: 18px;
    line-height: 22px;
  }
  span {
    font-size: 16px;
    color: #4a759c;
  }
`;
