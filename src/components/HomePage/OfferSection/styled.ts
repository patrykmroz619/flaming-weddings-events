import styled from 'styled-components';

import { Heading } from '@/components/common';

export const Section = styled.section`
  position: relative;
  min-height: 75vh;
`;

export const StyledHeading = styled(Heading)`
  position: absolute;
  top: -${({ theme }) => theme.spacing.xs};
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 1;
`;
