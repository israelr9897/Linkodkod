import { getAllPostsDB, writeAllPostsDB } from "../db/postsDAl.js";

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
    let data = await getAllPostsDB();
    if (data) {
      data = JSON.parse(data);
      const post = data.find((p) => p.id === req.params.id);
      if (post) return res.json(post);
    }
    res.status(403).json({ msg: "The post not found" });
  } catch (error) {
    console.log("get post by id error massege: ", error);
    res.status(500).json({ msg: error });
  }
}

export async function writeAllPosts(req, res) {
  try {
    writeAllPostsDB(req.body)
    res.json({msg: "Written successfully!"})
  } catch (error) {
    console.log("write all posts error massege:", error);
    res.status(500).json({msg: error})
  }
}
