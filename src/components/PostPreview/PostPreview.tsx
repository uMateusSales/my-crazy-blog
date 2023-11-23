import { GlobalContext } from "../../context";
import { PostContainer } from "./styles";
import { useContext } from "react";

const PostPreview = () => {
  const { posts } = useContext(GlobalContext);

  return (
    <>
      <PostContainer>
        {posts.map((i) => (
          <p>{i.title}</p>
        ))}
      </PostContainer>{" "}
    </>
  );
};

export default PostPreview;
