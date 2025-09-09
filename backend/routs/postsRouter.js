import express from "express"
import { getAllPosts, getPostById, addPost } from "../ctrl/postsCtrl.js";
import { checkParams } from "../middelware/checkParmas.js";
import { checkPost } from "../middelware/checkPost.js";

const router = express.Router();

router.get("/", getAllPosts)
router.post("/addpost",checkPost, addPost)
router.get("/:id",checkParams, getPostById)

export default router;