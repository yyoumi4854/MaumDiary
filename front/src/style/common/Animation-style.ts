import { keyframes } from "styled-components";

export const MoveForwardArrow = keyframes`
  0%{
    transform: translateX(0);
  }
  50%{
    transform: translateX(4px);
  }
  100%{
    transform: translateX(0);
  }
`;

export const StarblurSize = keyframes`
  0%{
    opacity: 1;
  }50%{
    opacity: 0;
  }100%{
    opacity: 1;
  }
`;
