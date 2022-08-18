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
router.delete('/:id', deleteUser);

//For get user
router.get('/find/:id', getUser);

//For subscribe
router.put('/sub/:id', subscribe);

//For subscribe
router.post('/unsub/:id', unsubscribe);

//For like a video
router.post('/like/:videoId', like);

//For unlike a video
router.post('/dislike/:videoId', dislike);

export default router;
