import { breakpoints, minWidth } from '@/style/media';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 var(--content-x-margin);
  max-width: ${({ theme }) => theme.contentWidth};

  ${minWidth(breakpoints.xxl + 100)} {
    margin: 0 auto;
  }
`;
