// import mongoose from "mongoose";
import UserModel from '../models/User.js';
import bcrypt from 'bcrypt';
import { createError } from '../error.js';
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

//login
export const signIn = async (request, response, next) => {
  try {
    const user = await UserModel.findOne({ email: request.body.email });
    if (!user) {
      return next(createError(404, 'User not found'));
    } else {
      const checkPassword = await bcrypt.compare(
        request.body.password,
        user.password
      );
      if (!checkPassword) {
        return next(createError(401, 'Incorrect password'));
      } else {
        const token = jwt.sign({ id: user._id }, process.env.JWT);
        const { password, ...others } = user._doc;

        response
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(others);
      }
    }
  } catch (err) {
    next(err);
  }
};
