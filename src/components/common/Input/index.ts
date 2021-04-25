import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.s} ${theme.spacing.s}`};
  background-color: #eee;
  border: none;
  border-radius: 20px;
  box-shadow: inset 0 0 10px 1px #ddd;
  font-family: 'Lato', 'arial', sans-serif;
  transition: 0.3s;

  &:focus {
    outline: none;
    background-color: #d5d5d5;
  }
`;
