import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const ProfileContainer = styled.div`
  background-color: #ffffff;
  padding: 2%;
  border-radius: 2%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 2%;
`;

export const ProfileHeader = styled.div`
  text-align: center;
  margin-bottom: 2%;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 15%;
  aspect-ratio: 1/1;
  border: 4px solid #4c90fe;
  pointer-events: none;
`;

export const ProfileName = styled.h1`
  font-size: 2rem;
  margin: .5% 0;
  color: #4c90fe;
`;

export const ProfileUsername = styled.p`
  font-size: 1.4rem;
  margin: 5px 0;
  color: #666;
`;

export const ProfileDetails = styled.div`
  margin-top: 5%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  margin-bottom: 1%;
  color: #4c90fe;
`;

export const ProfileInfo = styled.p`
  font-size: 1rem;
  margin: 1% 0;

  span {
    font-weight: bold;
  }
`;

export const ContactLink = styled.a`
  color: #417ee0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
