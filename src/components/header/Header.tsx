import LeftEffect from "../../assets/LeftEffect";
import RightEffect from "../../assets/RightEffect";
import TopTitle from "../../assets/TopTitle";

import {
  Avatar,
  ContatosCard,
  HeaderContainer,
  HeaderTitle,
  LinkContainer,
  ProfileCard,
  TitleContainer,
  UserBio,
  UserContainer,
  UserName,
} from "./styles";

import { useContext } from "react";
import { GlobalContext } from "../../context";
import GitHubIcon from "../../assets/GitHubIcon";
import { Linkedin } from "lucide-react";
import { FileCode2 } from "lucide-react";

const Header = () => {
  const { user } = useContext(GlobalContext);
  return (
    <HeaderContainer>
      <LeftEffect />
      <TitleContainer>
        <TopTitle />
        <HeaderTitle>Meu blog</HeaderTitle>
      </TitleContainer>
      <RightEffect />
      <ProfileCard>
        <Avatar src={user.avatar} />
        <UserContainer>
          <UserName>{user.name}</UserName>
          <UserBio>{user.bio}</UserBio>
          <ContatosCard>
            <LinkContainer
              href="https://github.com/uMateusSales"
              target="_blank"
            >
              <GitHubIcon /> uMateusSales{" "}
            </LinkContainer>

            <LinkContainer
              href="https://br.linkedin.com/in/mateus-lins-sales-061a5424a"
              target="_blank"
            >
              <Linkedin size={18} />
              Meu linkedin para contato
            </LinkContainer>
            <LinkContainer
              href="https://github.com/uMateusSales?tab=repositories"
              target="_blank"
            >
              <FileCode2 size={18} />
              Meus projetos
            </LinkContainer>
          </ContatosCard>
        </UserContainer>
      </ProfileCard>
    </HeaderContainer>
  );
};

export default Header;
