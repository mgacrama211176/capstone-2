import express from "express";
import {
  addComment,
  deleteComment,
  getComment,
  editComment,
  deleteAll,
} from "../controllers/comment-controller.js";

const router = express();

router.post("/:currentUser/:currentVideo", addComment);

router.get("/:videoId", getComment);
router.delete("/:commentId", deleteComment);
router.delete("/deleteAll/:videoId", deleteAll);
router.put("/:commentId", editComment);

export default router;
