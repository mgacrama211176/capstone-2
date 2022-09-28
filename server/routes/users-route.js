import express from 'express';
import {
  update,
  deleteUser,
  getUser,
  subscribe,
  unsubscribe,
  like,
  dislike,
  getAllUser,
  resetPassword,
  saveVideo,
  unSaveVideo,
} from '../controllers/user-controller.js';

const router = express();

//For update
router.put('/:id', update);

//For delete
router.delete('/delete/:id', deleteUser);

//For get user
router.get('/find/:id', getUser);

//For getting user using email for forgot password
router.put('/find/email/:email', getAllUser);

//After getting the password verify if token and expire is found on database
router.put('/find/email/reset/:resetPasswordToken', resetPassword);

//For subscribe
router.put('/sub/:currentUserId/:currentChannelId', subscribe);

//For unsubscribe
router.put('/unsub/:currentUserId/:currentChannelId', unsubscribe);

//For like a video
router.put('/like/:id/:videoId', like);

//For unlike a video
router.put('/dislike/:id/:videoId', dislike);

//For saving Videos
router.put('/save/:currentUserId/:currentVideoId', saveVideo);

//For Unsaving Videos
router.put('/unsave/:currentUserId/:currentVideoId', unSaveVideo);

export default router;
