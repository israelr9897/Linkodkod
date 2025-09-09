import "./App.css";
import Header from "./components/appliction-layout/Header";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AddPostPage from "./pages/AddPostPage";
import PostContext from "./useContext/postContext";

function App() {
  return (
    <>
      <Header />
      <PostContext>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/addpost" element={<AddPostPage />} />
        </Routes>
      </PostContext>
    </>
  );
}

export default App;
