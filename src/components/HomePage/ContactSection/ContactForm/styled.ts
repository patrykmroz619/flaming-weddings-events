import styled from 'styled-components';

import { breakpoints, minWidth } from '@/style/media';

import { Button, Input } from '@/components/common';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
`;

export const Label = styled.label`
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  flex-basis: 100%;
  ${minWidth(breakpoints.m)} {
    flex-basis: calc(50% - 5px);
  }

  p {
    margin-left: ${({ theme }) => theme.spacing.s};
    font-size: 14px;
  }
`;

export const FullWidthLabel = styled(Label)`
  flex-basis: 100%;
`;

export const Textarea = styled(Input)`
  height: 150px;
`;

export const SubmitButton = styled(Button)`
  margin: 0 auto;
`;
