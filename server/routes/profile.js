import { Router } from 'express';
import authMiddleware from '../middlewares/auth.js';
import { userProfile } from '../controllers/profile-controller.js';

const router = new Router();

// To get the `user` property from the Request
// Make sure to include the auth middleware
//                      👇
router.get('/me', authMiddleware, userProfile);

export default router;
