import type { PostType } from "../useContext/postContext";

const URL = "http://localhost:3005/posts";

export async function GetAllPostsApi() {
  const response = await fetch(URL);
  const data = await response.json();
  return JSON.parse(data.data);
}

export async function GetPostByIdApi(id: string) {
  const response = await fetch(`${URL}/${id}`);
  if (response.status === 403) return false;
  const data = await response.json();
  return data;
}
export async function writePostApi(posts: PostType) {
  const response = await fetch(URL + "/addpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(posts),
  });
  if(response.status === 403) return false
  const data = await response.json();
  return data.post;
}
