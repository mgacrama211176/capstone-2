import express from 'express';
import {
  addComment,
  deleteComment,
  getComment,
  editComment,
} from '../controllers/comment-controller.js';

const router = express();

router.post('/:currentUser/:currentVideo', addComment);

router.get('/:videoId', getComment);
router.delete('/:commentId', deleteComment);
router.put('/:commentId', editComment);

export default router;
