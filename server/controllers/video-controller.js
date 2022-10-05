import { createError } from '../error.js';
import VideoModel from '../models/Video.js';
import User from '../models/User.js';
import UserModel from '../models/User.js';

export const addVideo = async (request, response, next) => {
  const currentUser = request.params.currentUser;
  const newVideo = new VideoModel({ ...request.body, userId: currentUser });
  console.log(newVideo);
  response.status(200).json(newVideo);
  try {
    const savedVideo = await newVideo.save();
    response.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (request, response, next) => {
  const currentUser = request.params.currentUser;
  console.log(currentUser);

  try {
    const video = await VideoModel.findById(request.params.id);
    if (!video) {
      return next(createError(404, 'Video not found!'));
    }
    if (currentUser === video.userId) {
      const updateVideo = await VideoModel.findByIdAndUpdate(
        request.params.id,
        {
          $set: request.body,
        },
        { new: true }
      );
      response.status(200).json(updateVideo);
    } else {
      return next(createError(403, 'You can only update your own video!'));
    }
  } catch (err) {
    next(err);
  }
};

export const deleteVideo = async (request, response, next) => {
  try {
    const video = await VideoModel.findById(request.params.id);
    if (!video) {
      return next(createError(404, 'video not found!'));
    }
    if (request.user.id === video.userId) {
      await VideoModel.findByIdAndDelete(request.params.id);

      response.status(200).json('Video has been deleted');
    } else {
      return next(403, 'You can only delete your own video!');
    }
  } catch (err) {
    next(err);
  }
};

export const getVideo = async (request, response, next) => {
  try {
    const video = await VideoModel.findById(request.params.id);
    response.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const addView = async (request, response, next) => {
  try {
     const increment = await VideoModel.findByIdAndUpdate(request.params.videoId, {
      $inc: { views: 1 },
    });
    response.status(200).json(increment);
  } catch (err) {
    next(err);
  }
};

export const random = async (request, response, next) => {
  try {
    const videos = await VideoModel.aggregate([{ $sample: { size: 30 } }]);
    response.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const trend = async (request, response, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: -1 });
    response.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const sub = async (request, response, next) => {
  const currentUser = request.params.currentUser;
  try {
    const user = await User.findById(currentUser);
    const subscribedChannels = user.subscribedUsers;

    const list = await Promise.all(
      subscribedChannels.map((channelId) => {
        return VideoModel.find({ userId: channelId });
      })
    );
    response
      .status(200)
      .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (request, response, next) => {
  const tags = request.query.tags;
  try {
    const videos = await VideoModel.find({ tags: { $in: tags } }).limit(20);
    response.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (request, response, next) => {
  const query = request.query.q;
  try {
    const video = await VideoModel.find({
      title: { $regex: query, $options: 'i' },
    });
    response.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const library = async (request, response, next) => {
  const currentUser = request.params.currentUser;
  try {
    const user = await User.findById(currentUser);
    const savedVideos = user.saveVideos;

    const list = await Promise.all(
      savedVideos.map((videoId) => {
        return VideoModel.find({ _id: videoId });
      })
    );
    response
      .status(200)
      .json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
  } catch (err) {}
};

export const category = async (request, response, next) => {
  const videoCategory = request.params.category;
  console.log(videoCategory);
  try {
    const videos = await VideoModel.find({ tags: videoCategory });
    response.status(200).json(videos);
  } catch (err) {
    response.json(err);
  }
};
