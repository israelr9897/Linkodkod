import "./App.css";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AddPostPage from "./pages/AddPostPage";
import Layout from "./components/layout/Layout";
import UserContext from "./useContext/userContext";

function App() {
  return (
    <>
      <UserContext>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/addpost" element={<AddPostPage />} />
          </Route>
        </Routes>
      </UserContext>
    </>
  );
}

export default App;
