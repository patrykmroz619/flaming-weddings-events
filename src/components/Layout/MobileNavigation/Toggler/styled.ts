import styled from 'styled-components';

export const Toggler = styled.button`
  position: relative;
  width: 35px;
  height: 30px;
  border: none;
  background-color: transparent;

  div {
    --height: 6px;
    position: absolute;
    left: 0;
    width: 100%;
    height: var(--height);
    background-image: ${({ theme }) => theme.gradient};
    background-size: 200%;
    border-radius: 2px;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: calc(50% - var(--height) / 2);
    }

    &:nth-child(3) {
      top: calc(50% - var(--height) / 2);
    }

    &:nth-child(4) {
      top: auto;
      bottom: 0;
    }
  }
`;
