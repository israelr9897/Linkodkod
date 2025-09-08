import Posts from "../components/content/posts/Posts";
import "../assets/styles/homePage.css";
import PostContext from "../useContext/postContext";

export default function HomePage() {
  return (
    <div className="homePage">
      <PostContext>
        <Posts />
      </PostContext>
    </div>
  );
}
