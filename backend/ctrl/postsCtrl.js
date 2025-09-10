import { getAllPostsDB, writeAllPostsDB } from "../db/postsDAl.js";
import { createPost } from "../services/postService.js";

export async function getAllPosts(req, res) {
  try {
    const data = await getAllPostsDB();
    res.json({ data: data });
  } catch (error) {
    console.log("get all posts error massege: ", error);
    res.status(500).send({ msg: error });
  }
}

export async function getPostById(req, res) {
  try {
    const data = JSON.parse(await getAllPostsDB());
    if (data) {
      const post = data.find((p) => p.id === req.params.id);
      if (post) return res.json(post);
    }
    res.status(403).json({ msg: "The post not found" });
  } catch (error) {
    console.log("get post by id error massege: ", error);
    res.status(500).json({ msg: error });
  }
}

export async function addPost(req, res) {
  try {
    const post = await createPost(req.body);
    const data = JSON.parse(await getAllPostsDB());
    data.push(post);
    writeAllPostsDB(data);
    res.json({ msg: "Written successfully!", post: post});
  } catch (error) {
    console.log("write all posts error massege:", error);
    res.status(500).json({ msg: error });
  }
}
