import PostContext from "../../useContext/postContext";
// import { Outlet, Route, Routes } from "react-router";
import { Outlet } from "react-router";
import Header from "./Header";
import { useContext } from "react";
import { userContext } from "../../useContext/userContext";
import AuthPage from "../../pages/AuthPage";

export default function Layout() {
  const { user } = useContext(userContext)!;
  //בודק אם יוזר מחובר
  return user ? (
    <>
      <header>
        <Header />
      </header>
      <main>
        <PostContext>
          <Outlet />
        </PostContext>
      </main>
    </>
  ) : (
    //כשלא מחובר מביא את עמוד ההתחברות
    <AuthPage />
  );
}
