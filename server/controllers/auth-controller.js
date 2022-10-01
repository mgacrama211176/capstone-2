// import mongoose from "mongoose";
import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../error.js';
import removeProperty from '../utils/remove-property.js';
import jwt from 'jsonwebtoken';
export const signup = async (request, response, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(request.body.password, salt);

    const newUser = new UserModel({ ...request.body, password: newPassword });
    console.log(newUser);

    await newUser.save();
    response
      .status(200)
      .json({ message: `${request.body.username} has been added` });
  } catch (err) {
    next(err);
  }
};

export const signIn = async (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    // For improvements, use a validator library, like: validator or express-validator middleware
    // To give more context, on which fields has error
    return next(createError(401, 'Incorrect credentials, please try again'));
  }

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return next(createError(404, 'User not found'));
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      // DO NOT tell them that a password is correct
      return next(createError(401, 'Incorrect credentials, please try again'));
    }

    return response.status(200).json({
      token: jwt.sign(
        removeProperty('password', user.toJSON()), // 👈 Instead of using ._doc use toJson()
        process.env.JWT_SECRET_KEY
      ),
    });
  } catch (err) {
    next(err);
  }
};

export const googleSignIn = async (request, response, next) => {
  try {
    const user = await UserModel.findOne({ email: request.body.email });
    if (user) {
      response.status(200).json(user._doc);
    } else {
      const NewUser = new UserModel({
        ...request.body,
        fromGoogle: true,
      });
      const savedUser = await NewUser.save();
      response.status(200).json(savedUser._doc);
    }
  } catch (err) {
    next(err);
  }
};
