import { useContext, useState } from "react";
import LeftEffect from "../../assets/LeftEffect";
import RightEffect from "../../assets/RightEffect";
import TopTitle from "../../assets/TopTitle";
import {
  HeaderContainer,
  HeaderTitle,
  MainContainer,
  TitleContainer,
} from "./styles";
import { GlobalContext } from "../../context";
import axios from "axios";

const HomePage = () => {
  const [user, setUser] = useState("");

  const getUser = async () => {
    const response = await fetch("https://api.github.com/users/uMateusSales");
    const json = await response.json();
    setUser(json.name);
  };
  getUser();
  return (
    <MainContainer>
      <HeaderContainer>
        <LeftEffect />
        <TitleContainer>
          <TopTitle />
          <HeaderTitle>Toughts from {user}</HeaderTitle>
        </TitleContainer>
        <RightEffect />
      </HeaderContainer>
    </MainContainer>
  );
};

export default HomePage;
