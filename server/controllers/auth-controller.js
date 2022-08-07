// import mongoose from "mongoose";
import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import { createError } from "../error.js";

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

export const signin = async (request, response, next) => {
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
