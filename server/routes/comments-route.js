import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
} from "../controllers/comment-controller.js";

const router = express();

router.post("/", addComment);
router.delete("/:id", deleteComment);
router.get("/:videoId", getComment);

export default router;
