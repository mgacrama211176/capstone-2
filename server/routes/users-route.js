import express from 'express';
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
} from '../controllers/user-controller.js';
import { verifyToken } from '../verifyToken.js';

const router = express();

//For update
router.put('/:id', verifyToken, update);

//For delete
router.delete('/:id', verifyToken, deleteUser);

//For get user
router.get('/find/:id', getUser);

//For subscribe
router.put('/sub/:id', verifyToken, subscribe);

//For unsubscribe
router.post('/unsub/:id', verifyToken, unsubscribe);

//For like a video
router.post('/like/:videoId', verifyToken, like);

//For unlike a video
router.post('/dislike/:videoId', verifyToken, dislike);

export default router;
