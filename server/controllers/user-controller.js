import { createError } from "../error.js";
import User from "../models/User.js";
import Video from "../models/Video.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

//localhost:3000/api/users/UserID with body
export const update = async (request, response, next) => {
  if (request.params.id) {
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
    return next(createError(403, "You can only update your account!"));
  }
};

//localhost:3000/api/users/UserID to delete
export const deleteUser = async (request, response, next) => {
  if (request.params.id) {
    try {
      const deleteUser = await User.findByIdAndDelete(request.params.id);
      response.status(200).json("User Deleted");
    } catch (err) {}
  } else {
    return next(createError(403, "You can only delete your account!"));
  }
};

//localhost:3000/api/users/find/UserID to search
export const getUser = async (request, response, next) => {
  try {
    const user = await User.findById(request.params.id);
    response.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/find
//finding userInfo for resetting the password then send email for bcrypt
export const getAllUser = async (request, response, next) => {
  try {
    const token = crypto.randomBytes(20).toString("hex");
    const user = await User.findOneAndUpdate(
      { email: request.params.email },
      {
        $set: {
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000,
        },
      }
    );
    response.status(200).json(user);

    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      service: "yahoo",
      secure: false,
      auth: {
        user: "mrln_gcrm@yahoo.com",
        pass: "cunpdabriiaimtpi",
      },
      debug: false,
      logger: true,
    });

    // console.log(transporter);

    const mailOptions = {
      from: "mrln_gcrm@yahoo.com",
      to: request.params.email,
      subject: "FilAnime Password Reset link",
      text:
        `You are receiving this email because you (or someone else) have requested to reset the password on your account. \n \n` +
        `Please click on the link below or paste this into your browser to complete the process within one hour of receiving it: \n \n` +
        `http://127.0.0.1:5173/receivedEmail/${token} \n \n` +
        `If you did not request this, please ignore this email and your password will remain unchanged. \n`,
    };

    // console.log(mailOptions);

    console.log("Sending Email");

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("there was an error: ", err);
      } else {
        console.log("here is the response: ", info);
        response.status(200).json("Email sent!");
      }
    });
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (request, response, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(request.body.password, salt);
    const updatePassword = await User.findOneAndUpdate(
      {
        resetPasswordToken: request.params.resetPasswordToken,
      },
      { $set: { password: newPassword } }
    );
    response.status(200).json(`Password has been changed!`);
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/sub/UserID to search
export const subscribe = async (request, response, next) => {
  try {
    await User.findByIdAndUpdate(request.user.id, {
      $push: { subscribedUsers: request.params.id },
    });
    await User.findByIdAndUpdate(request.params.id, {
      $inc: { subscribers: 1 },
    });

    response.status(200).json("Subscribed successfull");
  } catch (err) {
    next(err);
  }
};

//localhost:3000/api/users/unsub/UserID to search
export const unsubscribe = async (request, response, next) => {
  try {
    try {
      await User.findByIdAndUpdate(request.params.id, {
        $pull: { subscribedUsers: request.params.id },
      });
      await User.findByIdAndUpdate(request.params.id, {
        $inc: { subscribers: -1 },
      });
      response.status(200).json("User Unsubscribed");
    } catch (err) {
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

//http://localhost:4000/api/users/like/:id/:videoId
export const like = async (request, response, next) => {
  const id = request.params.id;
  console.log(`UserID: ${id}`);
  const videoId = request.params.videoId;
  console.log(`VIdeoID: ${videoId}`);
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { likes: id },
      $pull: { dislikes: id },
    });
    response.status(200).json(`${videoId}:The video has been liked`);
  } catch (err) {
    next(err);
  }
};

//https://localhost:4000/api/users/dislike/:id/:videoId
export const dislike = async (request, response, next) => {
  const id = request.params.id;
  const videoId = request.params.videoId;
  try {
    await Video.findByIdAndUpdate(videoId, {
      $addToSet: { dislikes: id },
      $pull: { likes: id },
    });
    response.status(200).json(`${videoId}: The video has been disliked`);
  } catch (err) {
    next(err);
  }
};
