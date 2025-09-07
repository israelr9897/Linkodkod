import "../../../assets/styles/post.css";
import { useState } from "react";
import worldImg from "../../../assets/images/world.png";
import type { Post } from "../../../../server/db/postsData";

export default function Post({ discrption, name, date }: Post) {
  const [count, setCount] = useState(0);
  const [isOne, setIsOne] = useState(true);
  return (
    <div className="post">
      <div className="head-post">
        <img className="post-img" src={worldImg} alt="logo-img" />
        <div className="description">
          <h1>{discrption}</h1>
        </div>
      </div>
      <div className="details">
        <p className="name">Name: {name}</p>
        <p className="date">Created in: {date}</p>
      </div>
      <div className="likes">
        <div
          className="like"
          onClick={() => {
            if (isOne) {
              setCount((prev) => prev + 1);
              setIsOne(false);
            }
          }}
        >
          <div className="counter">{count}</div>
        </div>
      </div>
    </div>
  );
}
