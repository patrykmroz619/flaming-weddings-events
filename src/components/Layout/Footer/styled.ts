import { breakpoints, minWidth } from '@/style/media';
import styled from 'styled-components';

export const Footer = styled.footer`
  padding: ${({ theme }) => theme.spacing.xs} 0;
  background-color: ${({ theme }) => theme.colors.dark};
`;

export const Text = styled.p`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.contentWidth};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.light};

  span {
    padding: ${({ theme }) => theme.spacing.xs} 0;
    flex-basis: 100%;
    text-align: center;

    ${minWidth(breakpoints.m)} {
      margin: 0 var(--content-x-margin);
      flex-basis: auto;
    }
  }

  a {
    color: ${({ theme }) => theme.colors.light};
    transition: 0.5s;

    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
