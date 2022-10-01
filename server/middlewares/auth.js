import jwt from 'jsonwebtoken';
import { createError } from '../error.js';

const authMiddleware = async (req, res, next) => {
  // Get token from the Authorization header
  // @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization}
  const authHeader = req.get('authorization');

  if (!authHeader) {
    return res.status(401).json(createError(401, 'Unauthorized'));
  }

  // 💡 Remember Auth syntax: Bearer <token>
  const [_, token] = authHeader.split(' ');

  if (!token) {
    return res.status(401).json(createError(401, 'Invalid Token'));
  }

  try {
    const user = await jwt.verify(token, process.env.JWT_SECRET_KEY);

    // The user decoded object is not part of request
    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
