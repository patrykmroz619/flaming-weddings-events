import { Button } from '@/components/common';
import { breakpoints, minWidth } from '@/style/media';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
`;

export const Hero = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Heading = styled.h1`
  text-align: center;
  font-size: 25px;
  font-family: 'Luckiest Guy', 'Lato', sans-serif;
  font-weight: 400;

  &::first-line {
    font-size: 50px;
    text-transform: uppercase;
  }

  ${minWidth(breakpoints.m)} {
    font-size: 35px;

    &::first-line {
      font-size: 70px;
    }
  }

  ${minWidth(breakpoints.l)} {
    font-size: 45px;

    &::first-line {
      font-size: 90px;
    }
  }
`;

export const Subheading = styled.p`
  margin: ${({ theme }) => theme.spacing.s} 0;
  text-align: center;

  ${minWidth(breakpoints.m)} {
    margin: ${({ theme }) => theme.spacing.m} 0;
  }
`;

export const Btn = styled(Button)`
  width: 200px;
  margin: 0 auto;
`;
