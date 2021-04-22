import styled from 'styled-components';
import { Button, Container } from '@/components/common';
import { breakpoints, minWidth } from '@/style/media';

export const Section = styled.section`
  padding-bottom: ${({ theme }) => theme.spacing.l};
  background-color: ${({ theme }) => theme.colors.light};

  ${minWidth(breakpoints.xl)} {
    padding-bottom: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${minWidth(breakpoints.l)} {
    flex-direction: row;
  }

  @media (orientation: landscape) {
    flex-direction: row;
    min-height: 100vh;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin: ${({ theme }) => theme.spacing.m} 0;
  order: 1;

  ${minWidth(breakpoints.l)} {
    align-items: flex-start;
    order: 0;
  }

  @media (orientation: landscape) {
    align-items: flex-start;
    order: 0;
  }
`;

export const Heading = styled.h2`
  max-width: 380px;
  text-align: center;

  ${minWidth(breakpoints.l)} {
    text-align: left;

    span {
      display: block;
      font-size: 45px;
    }
  }

  @media (orientation: landscape) {
    text-align: left;

    span {
      display: block;
      font-size: 45px;
    }
  }
`;

export const Paragraph = styled.p`
  margin-top: var(--content-y-margin);
  margin-bottom: var(--content-y-margin);
  max-width: 380px;
  text-align: center;

  ${minWidth(breakpoints.l)} {
    text-align: left;
  }

  @media (orientation: landscape) {
    text-align: left;
  }
`;

export const Btn = styled(Button)``;

export const PhotoContainer = styled.div`
  position: relative;
  border: 2px solid black;
  flex-grow: 1;
  min-height: 300px;

  &::after {
    content: 'PHOTO';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
