import { breakpoints, minWidth } from '@/style/media';
import styled from 'styled-components';

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.light};
  padding-bottom: ${({ theme }) => theme.spacing.m};
`;

export const Paragraph = styled.p`
  margin: ${({ theme }) => theme.spacing.s} auto;
  max-width: 750px;
  text-align: center;
`;

export const ContactDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: space-evenly;
  margin: 0 auto ${({ theme }) => theme.spacing.s};
  max-width: 750px;

  ${minWidth(breakpoints.l)} {
    flex-wrap: nowrap;
  }
`;
