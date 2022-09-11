import { createError } from '../error.js';
import User from '../models/User.js';
import Video from '../models/Video.js';

//localhost:3000/api/users/UserID with body
export const update = async (request, response, next) => {
  if (request.params.id === request.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        request.params.id,
        {
          $set: request.body,
        },
        { new: true }
      );
      response.status(200).json(updatedUser);
    } catch (err) {}
  } else {
    return next(createError(403, 'You can only update your account!'));
  }
};

//localhost:3000/api/users/UserID to delete
export const deleteUser = async (request, response, next) => {
  if (request.params.id === request.user.id) {
    try {
      const deleteUser = await User.findByIdAndDelete(request.params.id);
      response.status(200).json('User Deleted');
    } catch (err) {}
  } else {
    return next(createError(403, 'You can only delete your account!'));
  }
};

//localhost:3000/api/users/find/UserID to search
export const getUser = async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/find
export const getAllUser = async (request, response, next) => {
  try {
    const user = await User.findOne({ email: request.params.email });

    response.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/sub/UserID to search
export const subscribe = async (request, response, next) => {
  try {
    await User.findByIdAndUpdate(request.user.id, {
      $push: { subscribedUsers: request.params.id },
    });
    await User.findByIdAndUpdate(request.params.id, {
      $inc: { subscribers: 1 },
    });

    response.status(200).json('Subscribed successfull');
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/unsub/UserID to search
export const unsubscribe = async (request, response, next) => {
  try {
    try {
      await User.findByIdAndUpdate(request.params.id, {
        $pull: { subscribedUsers: request.params.id },
      });
      await User.findByIdAndUpdate(request.params.id, {
        $inc: { subscribers: -1 },
      });
      response.status(200).json('User Unsubscribed');
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/like/:videoId
export const like = async (request, response, next) => {
  const id = request.user.id;
  const videoId = request.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    response.status(200).json(`${videoId}:The video has been liked`);
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/dislike/:videoId
export const dislike = async (request, response, next) => {
  const id = request.user.id;
  const videoId = request.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    response.status(200).json(`${videoId}: The video has been disliked`);
  } catch (err) {
    next(err);
  }
};
