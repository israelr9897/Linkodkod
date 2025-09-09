import { createContext, useState, type PropsWithChildren } from "react";

export const postContext = createContext<objType | null>(null);

export type PostType = {
  id: string;
  discrption: string;
  content: string;
  name: string;
  date: string;
  like: string;
  dislike: string;
  imgUrl: string;
};

export type objType = {
  posts: Array<PostType> | null;
  setPosts: React.Dispatch<React.SetStateAction<PostType[]>> | null;
};

export default function PostContext({ children }: PropsWithChildren) {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const obj: objType = {
    posts: posts,
    setPosts: setPosts,
  };
  return (
    <div>
      <postContext.Provider value={obj}>{children}</postContext.Provider>
    </div>
  );
}
