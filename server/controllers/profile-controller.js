export const userProfile = (req, res) => {
  // The `user` property will be given from the `middlewares/auth.js`
  //                               👇
  return res.status(200).json(req.user);
};
