import LeftEffect from "../../assets/LeftEffect";
import RightEffect from "../../assets/RightEffect";
import TopTitle from "../../assets/TopTitle";
import {
  Avatar,
  HeaderContainer,
  HeaderTitle,
  ProfileCard,
  TitleContainer,
  UserBio,
  UserContainer,
  UserName,
} from "./styles";
import { useContext } from "react";
import { GlobalContext } from "../../context";
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
        </UserContainer>
      </ProfileCard>
    </HeaderContainer>
  );
};

export default Header;
