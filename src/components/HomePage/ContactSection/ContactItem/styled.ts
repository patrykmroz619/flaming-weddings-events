import styled from 'styled-components';

export const Wrapper = styled.li`
  width: 100%;
  margin: ${({ theme }) => theme.spacing.s};
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Text = styled.p`
  text-align: center;
  a {
    transition: 0.3s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
