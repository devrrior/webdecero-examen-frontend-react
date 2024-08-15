import styled from "styled-components";

export const Container = styled.div`
  width: ${({ width }) => width || "100%"};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const Error = styled.span`
  color: #ff4d4d;
  font-size: 14px;
  margin-top: 4px;
  display: block;
`;
