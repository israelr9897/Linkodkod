import PostContext from "../../useContext/postContext";
// import { Outlet, Route, Routes } from "react-router";
import { Outlet } from "react-router";
import Header from "./Header";
import { useContext, type PropsWithChildren } from "react";
import { userContext } from "../../useContext/userContext";
import LoignPage from "../../pages/LoignPage";

export default function Layout({ children }: PropsWithChildren) {
  const { user } = useContext(userContext)!;
  return user ? (
    <>
      <header>
        <Header />
      </header>
      <main>
        <PostContext>
          {children}
          <Outlet />
        </PostContext>
      </main>
    </>
  ) : (
    <LoignPage/>
  );
}
