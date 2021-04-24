import { Button } from '@/components/common';
import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.s} 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Heading = styled.h2`
  padding: ${({ theme }) => theme.spacing.m} auto;
  text-align: center;
`;

export const Link = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s} auto;
`;
