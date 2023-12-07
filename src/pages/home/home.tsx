import PostPreview from "../../components/PostPreview/PostPreview";
import Header from "../../components/header/Header";
import { MainContainer, MainSection, ProfileSection } from "./styles";
import ProfileContainer from "../../components/profilecard/ProfileCard";
const HomePage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <ProfileSection>
          <ProfileContainer />
        </ProfileSection>
        <MainSection>
          <PostPreview />
        </MainSection>
      </MainContainer>
    </>
  );
};

export default HomePage;
