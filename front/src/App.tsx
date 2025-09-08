import "./App.css";
import Header from "./components/appliction-layout/Header";
import { Route, Routes } from "react-router";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/posts" element={<PostsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
