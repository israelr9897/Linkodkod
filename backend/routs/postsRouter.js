import express from "express"
import { getAllPosts, getPostById, writeAllPosts } from "../ctrl/postsCtrl.js";
import { checkParams } from "../middelware/checkParmas.js";

const router = express.Router();

router.get("/", getAllPosts)
router.post("/allposts", writeAllPosts)
router.get("/:id",checkParams, getPostById)

export default router;