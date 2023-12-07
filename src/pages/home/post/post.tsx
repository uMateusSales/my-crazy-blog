import {
  BackButton,
  ContentContainer,
  GithubButton,
  PostCard,
  PostContent,
  PostSection,
  PostTitle,
  TopButtons,
} from "./styles";

import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext, Post } from "../../../context";
import LeftArrow from "../../../assets/LeftArrow";
import GitRedirect from "../../../assets/GitRedirect";
import Header from "../../../components/header/Header";
import { MainContainer } from "../styles";

const PostPage = () => {
  const { posts } = useContext(GlobalContext);

  const { id } = useParams();

  const [post, setPost] = useState<Post>();

  const handlePost = () => {
    const selectedPost = posts?.find((i) => i.id.toString() === id);

    setPost(selectedPost);
  };
  console.log(post);
  useEffect(() => {
    handlePost();
  }, []);

  return (
    <>
      <Header />
      <PostSection>
        <PostCard>
          <TopButtons>
            <BackButton to="/">
              <LeftArrow />
              voltar
            </BackButton>
            <GithubButton target="_blank" to={post?.html_url || ""}>
              ver no github
              <GitRedirect />
            </GithubButton>
          </TopButtons>
          <PostTitle>{post?.title}</PostTitle>
        </PostCard>
      </PostSection>
      <MainContainer>
        <ContentContainer>
          <PostContent>{post?.body}</PostContent>
        </ContentContainer>
      </MainContainer>
    </>
  );
};

export default PostPage;
