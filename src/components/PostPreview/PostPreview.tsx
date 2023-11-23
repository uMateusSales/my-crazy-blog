import { GlobalContext } from "../../context";
import { PostContainer } from "./styles";
import { useContext } from "react";

const PostPreview = () => {
  const { posts } = useContext(GlobalContext);

  return (
    <>
      <PostContainer>
        {posts.map((i) => (
          <div>
            <p>{i.title}</p>
            <p>{i.body}</p>
          </div>
        ))}
      </PostContainer>{" "}
    </>
  );
};

export default PostPreview;
