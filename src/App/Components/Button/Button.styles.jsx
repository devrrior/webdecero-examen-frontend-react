import styled from "styled-components";

export const ButtonCustom = styled.button`
  /* primary color: #4c90fe hover: #417ee0 */
  /* error color: #f44336 hover: #d32f2f */
  width: 100%;
  background-color: ${({ colorType }) => {
    if (colorType === "primary") {
      return "#4c90fe";
    } else if (colorType === "error") {
      return "#f44336";
    }
  }};
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: ${({ colorType }) => {
      if (colorType === "primary") {
        return "#417ee0";
      } else if (colorType === "error") {
        return "#d32f2f";
      }
    }};
  }
`;
