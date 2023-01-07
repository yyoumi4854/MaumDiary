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
