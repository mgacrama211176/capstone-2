import express from 'express';
import {
  addVideo,
  addView,
  deleteVideo,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
  updateVideo,
  library,
  category,
} from '../controllers/video-controller.js';

const router = express();

router.post('/:currentUser', addVideo);
router.put('/:id/:currentUser', updateVideo);
router.delete('/:id', deleteVideo);
router.get('/find/:id', getVideo);
router.put('/views/view/:videoId', addView);
router.get('/trend', trend);
router.get('/random', random);
router.get('/sub/:currentUser', sub);
router.get('/tags', getByTag);
router.get('/search', search);
router.get('/library/:currentUser', library);
router.get('/category/:category', category);

export default router;
