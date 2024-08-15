import styled from "styled-components";

export const SpinnerStyle = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: ${({ size }) => size || "50px"};
  height: ${({ size }) => size || "50px"};
  border-radius: 50%;
  border-left-color: #4c90fe;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
