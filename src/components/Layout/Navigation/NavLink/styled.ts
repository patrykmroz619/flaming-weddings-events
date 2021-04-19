import styled from 'styled-components';

export const NavLinkWrapper = styled.li`
  position: relative;
  margin-right: ${({ theme }) => theme.spacing.m};
`;

export const NavLink = styled.a`
  display: block;
  width: 125px;
  line-height: 35px;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SublinksList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;
