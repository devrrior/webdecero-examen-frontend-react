import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: lighter;
  color: #403e3e;
`;

export const MainContainer = styled.div`
  background: #f7f7f7;
  min-width: 40%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2%;
  border: #d7d7d7 solid 1px;
  padding: 2% 3%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
