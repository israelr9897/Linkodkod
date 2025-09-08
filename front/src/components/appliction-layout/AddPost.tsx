import { useState } from "react";
import type { PostType } from "../../useContext/postContext";
import "../../assets/styles/addPost.css";

const postObj: PostType = {
  id: "",
  discrption: "",
  content: "",
  name: "",
  date: "",
  like: "",
  dislike: "",
};

export default function AddPost() {
  const [newPost, setNewPost] = useState<PostType>(postObj);
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
        <label htmlFor="discrption">Enter the post description: </label>
        <input
          type="text"
          id="description"
          placeholder="Enter here description..."
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
          <div className="btn">Add Post</div>
        </div>
      </div>
    </div>
  );
}
