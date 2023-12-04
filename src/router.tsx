import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import PostPage from "./pages/home/post/post";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostPage />} />
    </Routes>
  );
};

export default Router;
