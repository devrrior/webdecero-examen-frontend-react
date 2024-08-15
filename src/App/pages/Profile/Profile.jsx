import { useEffect, useState } from "react";
import { useAxiosAuthClient } from "../../hooks/useAxiosAuthClient";
import {
  ProfileContainer,
  ProfileHeader,
  ProfileImage,
  ProfileName,
  ProfileUsername,
  ProfileDetails,
  SectionTitle,
  ProfileInfo,
  ContactLink,
  Container,
} from "./Profile.styles";
import { Spinner } from "../../components/Spinner/Spinner";
import { getCurrentAuthUserService } from "../../api/authServices";
import { Button } from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";

export const Profile = () => {
  const { logout } = useAuth();
  const [user, setUser] = useState({});
  const axiosAuthClient = useAxiosAuthClient();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentAuthUserService(axiosAuthClient);
        setUser(userData);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, [axiosAuthClient]);

  return (
    <Container>
      {user.id ? (
        <ProfileContainer>
          <ProfileHeader>
            <ProfileImage src={user.image} alt="Foto de perfil" />
            <ProfileName>
              {user.firstName} {user.lastName}
            </ProfileName>
            <ProfileUsername>@{user.username}</ProfileUsername>
          </ProfileHeader>

          <ProfileDetails>
            <SectionTitle>Información Personal</SectionTitle>
            <ProfileInfo>
              <span>Nombre completo:</span> {user.firstName} {user.maidenName}{" "}
              {user.lastName}
            </ProfileInfo>
            <ProfileInfo>
              <span>Edad:</span> {user.age} años
            </ProfileInfo>
            <ProfileInfo>
              <span>Género:</span> {user.gender}
            </ProfileInfo>
            <ProfileInfo>
              <span>Grupo sanguíneo:</span> {user.bloodGroup}
            </ProfileInfo>
            <ProfileInfo>
              <span>Altura:</span> {user.height} cm
            </ProfileInfo>
            <ProfileInfo>
              <span>Peso:</span> {user.weight} kg
            </ProfileInfo>
            <ProfileInfo>
              <span>Color de ojos:</span> {user.eyeColor}
            </ProfileInfo>

            <SectionTitle>Contacto</SectionTitle>
            <ProfileInfo>
              <span>Email:</span> <ContactLink>{user.email}</ContactLink>
            </ProfileInfo>
            <ProfileInfo>
              <span>Teléfono:</span>{" "}
              <ContactLink href={`tel:${user.phone}`}>{user.phone}</ContactLink>
            </ProfileInfo>

            <SectionTitle>Detalles adicionales</SectionTitle>
            <ProfileInfo>
              <span>Fecha de nacimiento:</span>{" "}
              {new Date(user.birthDate).toLocaleDateString()}
            </ProfileInfo>
            <ProfileInfo>
              <span>Dirección IP:</span> {user.ip}
            </ProfileInfo>
            <ProfileInfo>
              <span>MAC Address:</span> {user.macAddress}
            </ProfileInfo>
            <ProfileInfo>
              <span>Universidad:</span> {user.university}
            </ProfileInfo>
            <ProfileInfo>
              <span>Rol:</span> {user.role}
            </ProfileInfo>
          </ProfileDetails>
          <br />
          <Button
            text="Cerrar sesión"
            colorType="error"
            onClick={() => {
              logout();
            }}
          />
        </ProfileContainer>
      ) : (
        <Spinner width={"50%"} />
      )}
    </Container>
  );
};
