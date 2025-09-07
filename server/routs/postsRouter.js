import express from "express"
import { getAllPosts, getPostById } from "../ctrl/postsCtrl";

const router = express.Router();

router.get("/", getAllPosts)
router.get("/:id", getPostById)

export default router;