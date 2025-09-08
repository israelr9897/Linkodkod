import { useEffect, useState } from "react";
import "../assets/styles/postPage.css";
import { useParams } from "react-router";
import Post from "../components/content/posts/Post";
import { GetPostByIdApi } from "../api/clientApi";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  useEffect(() => {
    const getPostById = async () => {
      const data = await GetPostByIdApi(id!);
      if (data) setPost(data);
    };
    getPostById();
  }, []);

  return post ? (
    <div className="postPage">
      <Post post={post} />
    </div>
  ) : (
    <h1>Sorry, the post not found</h1>
  );
}
