import { Button } from '@/components/common';
import { breakpoints, minWidth } from '@/style/media';
import styled from 'styled-components';

export const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
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
  font-weight: 400;

  &::first-line {
    font-size: 70px;
    text-transform: uppercase;
  }

  ${minWidth(breakpoints.m)} {
    font-size: 35px;

    &::first-line {
      font-size: 80px;
    }
  }

  ${minWidth(breakpoints.l)} {
    font-size: 50px;

    &::first-line {
      font-size: 120px;
    }
  }

  ${minWidth(breakpoints.xl)} {
    font-size: 60px;
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

export const BackgroundWrapper = styled.div`
  position: relative;
  height: 100%;
  div {
    position: fixed !important;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    filter: grayscale(0.6);
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    background-image: radial-gradient(
      #ffffffd2 10%,
      ${({ theme }) => theme.colors.light} 75%
    );
  }
`;
