import express from 'express';
import {
  signup,
  signIn,
  googleSignIn,
} from '../controllers/auth-controller.js';

const router = express();

// create User
router.post('/signup', signup);

router.post('/signin', signIn);

router.post('/google', googleSignIn);
//facebook Auth

// router.post("/facebook", signup);

export default router;
