import "../../../assets/styles/post.css";
import { useState } from "react";
import likeImg from "../../../assets/images/like-img.png";
import dislikeImg from "../../../assets/images/dislike-img.png";
import type { PostType } from "../../../useContext/postContext";
import { useNavigate } from "react-router";

export default function Post({ post }: { post: PostType }) {
  const [countLike, setCountLike] = useState<number>(Number(post.like));
  const [countDislike, setCountDislike] = useState<number>(
    Number(post.dislike)
  );
  const [isOneLike, setIsOneLike] = useState(true);
  const [isOneDisLike, setIsOneDisLike] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="post" onClick={() => navigate(`/post/${post.id}`)}>
      <div className="head-post">
        <img
          className="post-img"
          src={`http://localhost:3005/images/${post.id}.png`}
          alt="logo-img"
        />
        <div className="description">
          <h1>{post.discrption}</h1>
        </div>
      </div>
      <div className="content">
        <p>{post.content}</p>
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
        <p className="name">Name: {post.name}</p>
        <p className="date">Created in: {post.date}</p>
      </div>
    </div>
  );
}
