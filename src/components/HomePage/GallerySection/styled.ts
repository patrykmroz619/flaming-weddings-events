import { Button } from '@/components/common';
import styled from 'styled-components';

export const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.s} 0;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const Paragraph = styled.p`
  margin: 0 auto;
  max-width: 750px;
  text-align: center;
`;

export const Link = styled(Button)`
  margin: ${({ theme }) => theme.spacing.s} auto;
`;
