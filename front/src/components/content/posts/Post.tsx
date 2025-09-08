import "../../../assets/styles/post.css";
import { useState } from "react";
import likeImg from "../../../assets/images/like-img.png";
import dislikeImg from "../../../assets/images/dislike-img.png";
import type { Post } from "./Posts";

export default function Post({id,  discrption, content, name, date }: Post) {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);
  const [isOneLike, setIsOneLike] = useState(true);
  const [isOneDisLike, setIsOneDisLike] = useState(true);
  return (
    <div className="post">
      <div className="head-post">
        <img className="post-img" src={`http://localhost:3005/${Number(id) % 2 + 1}.png`} alt="logo-img" />
        <div className="description">
          <h1>{discrption}</h1>
        </div>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="likes">
        <div
          className="like"
          onClick={() => {
            if (isOneDisLike) {
              if (isOneLike) {
                setCountLike((prev) => prev + 1);
                setIsOneLike(!isOneLike);
              } else {
                setCountLike((prev) => prev - 1);
                setIsOneLike(!isOneLike);
              }
            }
          }}
        >
          <img className="like-img" src={likeImg} alt="likeImg" />
          <div className="counterLike">{countLike}</div>
        </div>
        <div
          className="like"
          onClick={() => {
            if (isOneLike) {
              if (isOneDisLike) {
                setCountDislike((prev) => prev + 1);
                setIsOneDisLike(false);
              } else {
                setCountDislike((prev) => prev - 1);
                setIsOneDisLike(!isOneDisLike);
              }
            }
          }}
        >
          <img className="like-img" src={dislikeImg} alt="dislikeImg" />
          <div className="counterDislike">{countDislike}</div>
        </div>
      </div>
      <div className="details">
        <p className="name">Name: {name}</p>
        <p className="date">Created in: {date}</p>
      </div>
    </div>
  );
}
