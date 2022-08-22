import VideoModel from '../models/Video';

export const addVideo = async (request, response, next) => {
  const newVideo = new VideoModel({ userId: request.user.id, ...request.body });
  tr{}catch(err){
    next(err)
  }
};

export const updateVideo = async (request, response, next) => {};
export const deleteVideo = async (request, response, next) => {};
export const getVideo = async (request, response, next) => {};
export const addView = async (request, response, next) => {};
export const random = async (request, response, next) => {};
export const trend = async (request, response, next) => {};
export const sub = async (request, response, next) => {};
export const getByTag = async (request, response, next) => {};
export const search = async (request, response, next) => {};
