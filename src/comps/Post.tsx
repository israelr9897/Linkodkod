import "../assets/styles/post.css";
import { useState } from "react";

export default function Post() {
  const [count, setCount] = useState(0);
  return (
    <div className="main-post">
      <div className="post">
        <div className="head-post">
          <img className="logo-img" src="" alt="logo-img" />
          <div className="description">
            <h1>description</h1>
          </div>
        </div>
        <div className="details">
          <p className="name">Name:</p>
          <p className="date">Created in:</p>
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
