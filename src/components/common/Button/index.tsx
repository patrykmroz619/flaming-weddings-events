import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: ${({ theme: { spacing } }) => `0 ${spacing.l}`};
  height: 40px;
  line-height: 40px;

  color: #eee;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  text-align: center;

  border: none;
  border-radius: 20px;
  cursor: pointer;

  transition: 0.5s;
  background-size: 200% auto;
  background-image: ${({ theme }) => theme.gradient};
  box-shadow: 0 3px 10px -1px black;

  &:hover {
    background-position: right center;
  }
`;
