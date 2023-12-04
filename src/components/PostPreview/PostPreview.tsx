import { GlobalContext } from "../../context";
import { PostContainer, PostContent, PostSection, PostTitle } from "./styles";
import { useContext } from "react";

const PostPreview = () => {
  const { posts } = useContext(GlobalContext);

  return (
    <>
      <PostSection>
        {posts.map((i) => (
          <PostContainer to={`/post/${i.id}`}>
            <PostTitle>{i.title}</PostTitle>
            <PostContent>{i.body}</PostContent>
          </PostContainer>
        ))}
      </PostSection>
    </>
  );
};

export default PostPreview;
