import styled from 'styled-components';

export const Section = styled.section`
  position: relative;
  min-height: 90vh;
`;

export const Heading = styled.h2`
  position: absolute;
  top: -${({ theme }) => theme.spacing.xs};
  left: 50%;
  transform: translate(-50%, -100%);
  z-index: 1;
`;
