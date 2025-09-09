// import { nanoid } from 'nanoid';

import { getAllPostsDB } from "../postsDAl.js";

export async function createPost(post) {
  const data = JSON.parse(await getAllPostsDB());
  const id = Number(data[data.length - 1].id) + 1;
  post.id = String(id);
  post.date = new Date().toLocaleDateString();
  post.imgUrl = `http://localhost:3005/images/${id}.png`;
  return post;
}
