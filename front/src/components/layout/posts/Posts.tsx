import Post from "./Post";
import "../../../assets/styles/posts.css";
import { useContext, useEffect } from "react";
import { GetAllPostsApi } from "../../../api/clientApi";
import loading from "../../../assets/images/loading.png";
import {
  postContext,
  type objType,
  type PostType,
} from "../../../useContext/postContext";

export default function Posts() {
  const { posts, setPosts }: objType = useContext(postContext)!;
  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      setPosts!(JSON.parse(data));
    } else {
      const server = async () => {
        const response: PostType[] = await GetAllPostsApi();
        setPosts!(response);
        localStorage.setItem("data", JSON.stringify(response));
      };
      server();
    }
  }, []);
  return posts ? (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  ) : (
    <div className="loading">
      <img src={loading} />
      <h1 className="text">We are bringing you the posts right now ...</h1>
    </div>
  );
}
