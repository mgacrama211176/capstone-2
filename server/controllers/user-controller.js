import { createError } from '../error.js';
import User from '../models/User.js';

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

export const deleteUser = (request, response, next) => {};

export const getUser = (request, response, next) => {};

export const subscribe = (request, response, next) => {};

export const unsubscribe = (request, response, next) => {};

export const like = (request, response, next) => {};

export const dislike = (request, response, next) => {};
