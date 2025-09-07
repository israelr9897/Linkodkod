import Post from "./Post";
import "../../../assets/styles/posts.css";
import dataPosts from "../../../../server/db/postsData";
import { useEffect, useState } from "react";

export type Post = {
  discrption: string;
  name: string;
  date: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Array<Post>>()
  useEffect(() => {
    const server = async () => {
      const response = await fetch("http://localhost:3005/posts")
      const data = await response.json()
      if(data){
        setPosts(data)
      }
    }
    server()
  },[])
  return (
    posts && 
    <div className="posts">
      {posts.map((post) => (
        <Post discrption={post.discrption} name={post.name} date={post.date} />
      ))}
    </div>
  );
}
