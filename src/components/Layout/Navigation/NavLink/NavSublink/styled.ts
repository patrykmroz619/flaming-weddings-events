import { Button } from '@/components/common';
import styled from 'styled-components';

export const Sublink = styled(Button)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.s}`};
  text-align: center;
`;
