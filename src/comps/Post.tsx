import "../assets/styles/post.css";
import { useState } from "react";
import worldImg from "../assets/images/world.png";

export type Post = {
  discrption: string;
  name: string;
  date: string;
};

const post: Post = {
  // imgUrl:,
  discrption: "Hello World",
  name: "Israel israeli",
  date: "07/09/2025",
};

export default function Post() {
  const [count, setCount] = useState(0);
  return (
    <div className="main-post">
      <div className="post">
        <div className="head-post">
          <img className="logo-img" src={worldImg} alt="logo-img" />
          <div className="description">
            <h1>{post.discrption}</h1>
          </div>
        </div>
        <div className="details">
          <p className="name">Name: {post.name}</p>
          <p className="date">Created in: {post.date}</p>
        </div>
        <div className="likes">
          <div className="like" onClick={() => setCount((prev) => prev + 1)}>
            <div className="counter">{count}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
