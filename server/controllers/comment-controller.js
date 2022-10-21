import { createError } from "../error.js";
import CommentModel from "../models/Comments.js";
import VideoModel from "../models/Video.js";
import User from "../models/User.js";

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
  const commentId = request.params.commentId;

  const deleteComment = await CommentModel.findByIdAndDelete(commentId);
  response.status(200).json("Comment Deleted");
};

//localhost:4000/api/comments/deleteAll/:videoId
export const deleteAll = async (request, response, next) => {
  const VideoId = request.params.videoId;
  try {
    console.log(VideoId);
    const retrieveVideoComments = await CommentModel.deleteMany({
      videoId: VideoId,
    });
    response.status(200).json(retrieveVideoComments);
  } catch (err) {
    response.json(err);
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

export const editComment = async (request, response, next) => {
  const description = request.body;
  const commentId = request.params.commentId;
  try {
    const getNewComment = await CommentModel.findByIdAndUpdate(
      commentId,
      { $set: description },
      { new: true }
    );
    response.status(200).json(getNewComment);
  } catch (err) {
    response.json(err);
  }
};
