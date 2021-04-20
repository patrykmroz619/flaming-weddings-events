import styled from 'styled-components';

export const SocialsWrapper = styled.div`
  position: fixed;
  top: calc(50% - 75px);
  right: ${({ theme }) => theme.spacing.m};
  z-index: 2;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
`;
