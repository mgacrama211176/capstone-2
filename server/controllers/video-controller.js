import { createConnection } from 'mongoose';
import { createError } from '../error';
import VideoModel from '../models/Video';

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
      return next(createConnection(404, 'Video not found!'));
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
    const videos = await VideoModel.aggregate([{ $sample: { size: 40 } }]);
    response.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const trend = async (request, response, next) => {
  try {
    const videos = await VideoModel.find().sort({ views: -1 });
    response.status(200).json(video);
  } catch (err) {
    next(err);
  }
};

export const sub = async (request, response, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const getByTag = async (request, response, next) => {
  try {
  } catch (err) {
    next(err);
  }
};

export const search = async (request, response, next) => {
  try {
  } catch (err) {
    next(err);
  }
};
