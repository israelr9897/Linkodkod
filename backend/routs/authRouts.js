import express from "express"
import {login, signup } from "../ctrl/authCtrl.js";

const router = express.Router();

// router.get("/", getAllUsers)
router.post("/login", login)
router.post("/signup", signup)
// router.post("/addpost",checkPost, addPost)
// router.get("/:id",checkParams, getPostById)

export default router;