import { FileCode2 } from "lucide-react";
import {
  ProfileCard,
  Avatar,
  UserContainer,
  UserName,
  UserBio,
  ContatosCard,
  LinkContainer,
  LocationContainer,
} from "./styles";
import LocationSvg from "../../assets/LocationSvg";

import { useContext } from "react";
import { GlobalContext } from "../../context";
import GitHubIcon from "../../assets/GitHubIcon";

const ProfileContainer = () => {
  const { user } = useContext(GlobalContext);
  return (
    <ProfileCard>
      <Avatar src={user.avatar} />
      <UserContainer>
        <UserName>{user.name}</UserName>
        <UserBio>{user.bio}</UserBio>
        <ContatosCard>
          <LinkContainer href="https://github.com/uMateusSales" target="_blank">
            <GitHubIcon /> uMateusSales{" "}
          </LinkContainer>

          <LinkContainer
            href="https://github.com/uMateusSales?tab=repositories"
            target="_blank"
          >
            <FileCode2 size={18} />
            Repositorios ativos:
            {` ${user.repos}`}
          </LinkContainer>
          <LocationContainer>
            <LocationSvg /> {user.location}
          </LocationContainer>
        </ContatosCard>
      </UserContainer>
    </ProfileCard>
  );
};

export default ProfileContainer;
