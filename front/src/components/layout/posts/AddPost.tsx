import { useContext, useState } from "react";
import {
  postContext,
  type objType,
  type PostType,
} from "../../../useContext/postContext";
import "../../../assets/styles/addPost.css";
import { AddPostApi } from "../../../api/postsApi";

const postObj: PostType = {
  id: "",
  discrption: "",
  content: "",
  name: "",
  date: "",
  like: "0",
  dislike: "0",
  imgUrl: "",
};

export default function AddPost({ fn }: { fn: (isSucced: boolean) => void }) {
  const [newPost, setNewPost] = useState<PostType>(postObj);
  const [isSucced, setIsSucced] = useState<boolean>(true);
  const { posts }: objType = useContext(postContext)!;
  async function handlerOnCLick() {
    const fullPost = await AddPostApi(newPost);
    if (fullPost) {
      localStorage.setItem("data", JSON.stringify([...posts!, fullPost]));
      fn(true);
    } else setIsSucced(false);
  }
  return (
    <div className="addPostForm">
      <div className="form">
        <label htmlFor="name">Enter Your full name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter here full name..."
          onChange={(e) => setNewPost({ ...newPost, name: e.target.value })}
        />
        <label htmlFor="discrption">Enter the post discrption: </label>
        <input
          type="text"
          id="discrption"
          placeholder="Enter here discrption..."
          onChange={(e) =>
            setNewPost({ ...newPost, discrption: e.target.value })
          }
        />
        <label htmlFor="content">Enter the post content: </label>
        <input
          type="text"
          id="content"
          placeholder="Enter here content..."
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        />
        <div className="btn-add">
          <div className="btn" onClick={handlerOnCLick}>
            Add Post
          </div>
        </div>
        {!isSucced && (
          <p className="msg">
            Post addition failed! check if you have filled in all fields...
          </p>
        )}
      </div>
    </div>
  );
}
