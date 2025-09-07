import { getAllPostsDB, getPostByIdDB } from "../db/postsDAl";

export async function getAllPosts(req, res) {
  try {
    const data = await getAllPostsDB();
    res.json(data);
  } catch (error) {
    console.log("get all posts error massege: ", error);
    res.status(500).json({ msg: error });
  }
}
export async function getPostById(req, res) {
  try {
    const data = await getPostByIdDB(req.params.id);
    if (data) return res.json(data);
    res.json({msg: "The post not found"})
  } catch (error) {
    console.log("get post by id error massege: ", error);
    res.status(500).json({ msg: error });
  }
}
