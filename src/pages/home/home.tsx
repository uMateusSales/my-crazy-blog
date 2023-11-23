import PostPreview from "../../components/PostPreview/PostPreview";
import Header from "../../components/header/Header";
import { MainContainer } from "./styles";

const HomePage = () => {
  return (
    <MainContainer>
      <Header />
      <PostPreview />
    </MainContainer>
  );
};

export default HomePage;
