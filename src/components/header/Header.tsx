import TopTitle from "../../assets/TopTitle";

import { HeaderContainer, HeaderTitle, TitleContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <TopTitle />
        <HeaderTitle>Mateus Sales's toughts about life and society</HeaderTitle>
      </TitleContainer>
    </HeaderContainer>
  );
};

export default Header;
