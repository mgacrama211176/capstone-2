import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    userCategory: {
      type: String,
      default: 'Viewer',
    },

    password: {
      type: String,
    },
    image: {
      type: String,
      default:
        'https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg',
    },
    subscribers: {
      type: Number,
      default: 0,
    },
    subscribedUsers: {
      type: [String],
    },

    fromGoogle: {
      type: Boolean,
      default: false,
    },

    experience: {
      type: String,
    },

    fullName: {
      type: String,
    },
    address: {
      type: String,
    },

    birthdate: {
      type: String,
    },

    about: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
