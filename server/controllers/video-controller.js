import { createError } from '../error.js';
import VideoModel from '../models/Video.js';
import User from '../models/User.js';

export const addVideo = async (request, response, next) => {
  const newVideo = new VideoModel({ userId: request.user.id, ...request.body });
  try {
    const savedVideo = await newVideo.save();
    response.status(200).json(savedVideo);
  } catch (err) {
    next(err);
  }
};

export const updateVideo = async (request, response, next) => {
  try {
    const video = await VideoModel.findById(request.params.id);
    if (!video) {
      return next(createError(404, 'Video not found!'));
    }
    if (request.user.id === video.userId) {
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
    await VideoModel.findByIdAndUpdate(request.params.id, {
      $inc: { views: 1 },
    });
    response.status(200).json('View increased');
  } catch (err) {
    next(err);
  }
};

export const random = async (request, response, next) => {
  try {
    const videos = await VideoModel.aggregate([{ $sample: { size: 15 } }]);
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
  try {
    const user = await User.findById(request.user.id);
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
  const tags = request.query.tags.split(',');
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
