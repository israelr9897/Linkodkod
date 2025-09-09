import {
  createContext,
  useState,
  type PropsWithChildren,
} from "react";

export const postContext = createContext<objType | null>(null);

export type PostType = {
  id: string;
  discrption: string;
  content: string;
  name: string;
  date: string;
  like: string;
  dislike: string;
};

export type objType = {
  posts: Array<PostType> | null;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>> | null;
};

// const postObj: PostType = {
//   id: "",
//   discrption: "",
//   content: "",
//   name: "",
//   date: "",
//   like: "",
//   dislike: "",
// };

export default function PostContext({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const obj: objType = {
    posts: posts,
    setPosts: setPosts,
  };
  // useEffect(() => {
  //   console.log("useeffect context");
  //   const data = localStorage.getItem("data");
  //   if (data) {
  //     setPosts(JSON.parse(data));
  //   }
  // }, []);
  return (
    <div>
      <postContext.Provider value={obj}>{children}</postContext.Provider>
    </div>
  );
}
