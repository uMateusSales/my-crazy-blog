import LeftEffect from "../../assets/LeftEffect";
import RightEffect from "../../assets/RightEffect";
import TopTitle from "../../assets/TopTitle";

import { HeaderContainer, HeaderTitle, TitleContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LeftEffect />
      <TitleContainer>
        <TopTitle />
        <HeaderTitle>Mateus Sales's toughts about life and society</HeaderTitle>
      </TitleContainer>
      <RightEffect />
    </HeaderContainer>
  );
};

export default Header;
