//this is for creating own error codes

export const createError = (status, message) => {
  // For improvements, you can make your own Error class
  //                  👇
  const error = new Error();
  error.status = status;
  error.message = message;

  return error;
};
