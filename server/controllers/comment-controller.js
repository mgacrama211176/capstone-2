import { createError } from '../error.js';
import CommentModel from '../models/Comments.js';
import VideoModel from '../models/Video.js';
import User from '../models/User.js';

//localhost:3000/api/comments/CurrentUser
export const addComment = async (request, response, next) => {
  const currentUser = request.params.currentUser;
  const currentVideo = request.params.currentVideo;
  const desc = request.body.desc;

  try {
    const newComment = new CommentModel({
      userId: currentUser,
      videoId: currentVideo,
      desc: desc,
    });
    const savedComment = await newComment.save();
    console.log(savedComment);
    response.status(200).json(savedComment);
  } catch (err) {
    console.log(err);
  }
};

//localhost:3000/api/comments
export const deleteComment = async (request, response, next) => {
  const comment = await CommentModel.findById(request.params.id);
  const video = await VideoModel.findById(request.params.id);
  try {
    if (
      request.user.id === comment.userId ||
      request.user.id === video.userId
    ) {
      await CommentModel.findByIdAndDelete(request.params.id);
      response.status(200).json('Comment Deleted!');
    } else {
      return next(
        createError(
          403,
          "You can't delete this since your it's not your comment."
        )
      );
    }
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/comments
export const getComment = async (request, response, next) => {
  try {
    const generateComments = await CommentModel.find({
      videoId: request.params.videoId,
    });
    response.status(200).json(generateComments);
  } catch (err) {
    next(err);
  }
};
