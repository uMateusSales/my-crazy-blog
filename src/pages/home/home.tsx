import PostPreview from "../../components/PostPreview/PostPreview";
import Header from "../../components/header/Header";
import { MainContainer, ProfileSection } from "./styles";
import ProfileContainer from "../../components/profilecard/ProfileCard";
const HomePage = () => {
  return (
    <>
      <Header />
      <ProfileSection>
        <ProfileContainer />
      </ProfileSection>
      <MainContainer>
        <PostPreview />
      </MainContainer>
    </>
  );
};

export default HomePage;
