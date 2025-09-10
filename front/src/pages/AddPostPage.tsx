import AddPost from "../components/layout/posts/AddPost";
import "../assets/styles/addPostPage.css";
import { useState } from "react";

export default function AddPostPage() {
  const [isTrue, setIsTRue] = useState<boolean>(false);
  function checkIsTrue(isSucced: boolean) {
    setIsTRue(isSucced);
  }
  return !isTrue ? (
    <div className="addPostPage">
      <AddPost fn={checkIsTrue} />
    </div>
  ) : (
    <h1 className="msg-succed">√ Post added</h1>
  );
}
