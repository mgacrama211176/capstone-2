import express from 'express';
import {
  addComment,
  deleteComment,
  getComment,
} from '../controllers/comment-controller.js';
import { verifyToken } from '../verifyToken.js';

const router = express();

router.post('/', verifyToken, addComment);
router.delete('/:id', verifyToken, deleteComment);
router.get('/:videoId', getComment);

export default router;
