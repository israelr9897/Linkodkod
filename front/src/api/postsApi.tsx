import type { PostType } from "../useContext/postContext";

const URL = "http://localhost:3005/posts";

const TOKEN =  () => {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user).token;
}

export async function GetAllPostsApi() {
  // const token = getToken();
  const response = await fetch(URL, {
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN(),
    },
  });
  const data = await response.json();
  return JSON.parse(data.data);
}

export async function GetPostByIdApi(id: string) {
  const response = await fetch(`${URL}/${id}`, {
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN(),
    },
  });
  if (response.status === 403) return false;
  const data = await response.json();
  return data;
}
export async function AddPostApi(posts: PostType) {
  const response = await fetch(URL + "/addpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: TOKEN(),
    },
    body: JSON.stringify(posts),
  });
  if (response.status === 403) return false;
  const data = await response.json();
  return data.post;
}
