import Post from "./Post";
import "../../../assets/styles/postsPage.css";
import { useEffect, useState } from "react";
import { GetAllPostsApi } from "../../../api/clientApi";
import loading from "../../../assets/images/loading.png";

export type Post = {
  id: string;
  discrption: string;
  content: string;
  name: string;
  date: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Array<Post>>();
  useEffect(() => {
    const server = async () => {
      const response = await GetAllPostsApi();
      setPosts(response);
    };
    server();
  }, []);
  return posts ? (
    <div className="posts">
      {posts.map((post) => (
        <Post
          id={post.id}
          discrption={post.discrption}
          content={post.content}
          name={post.name}
          date={post.date}
        />
      ))}
    </div>
  ) : (
    <div className="loading">
      <img src={loading} />
      <h1 className="text">We are bringing you the posts right now ...</h1>
    </div>
  )
}
