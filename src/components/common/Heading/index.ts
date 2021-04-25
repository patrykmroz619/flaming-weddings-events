import styled from 'styled-components';

export const Heading = styled.h2`
  position: relative;
  padding: ${({ theme }) => theme.spacing.m} 0 ${({ theme }) => theme.spacing.m};
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 5px;
    background-image: ${({ theme }) => theme.gradient};
    background-size: 200%;
    border-radius: 5px;
  }
`;
