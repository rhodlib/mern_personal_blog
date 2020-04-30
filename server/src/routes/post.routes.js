//Imports
const { Router } = require("express");
const router = Router();
const {
  getPosts,
  getPostBySlug,
  createPost,
  deletePost,
  updatePost,
} = require("../controllers/post.controller");
const auth = require("../middlewares/auth");

//Routes
router.get("/api/post", getPosts);
router.get("/api/post/:slug", getPostBySlug);

//Only admin
router.post("/api/new/post", auth, createPost);
router.put("/api/update/:id", auth, updatePost);
router.delete("/api/delete/:id", auth, deletePost);

//Export
module.exports = router;
