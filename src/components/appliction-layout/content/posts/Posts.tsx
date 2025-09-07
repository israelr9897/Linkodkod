import Post from "./Post";
import "../assets/styles/posts.css";
import dataPosts from "./postsData";

export default function Posts() {
  return (
    <div className="posts">
      {dataPosts.map((post) => (
        <Post discrption={post.discrption} name={post.name} date={post.date} />
      ))}
    </div>
  );
}
