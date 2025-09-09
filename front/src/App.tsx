import "./App.css";
// import Header from "./components/appliction-layout/Header";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AddPostPage from "./pages/AddPostPage";
// import PostContext from "./useContext/postContext";
// import LoignPage from "./pages/LoignPage";
import { useContext, useState } from "react";
import Layout from "./components/layout/Layout";
import UserContext, { userContext } from "./useContext/userContext";
import LoignPage from "./pages/LoignPage";

function App() {
  return (
    <>
      {/* <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/addpost" element={<AddPostPage />} /> */}
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
