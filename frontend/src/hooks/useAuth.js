import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AUTH_LOGOUT, AUTH_TOKEN, AUTH_USER } from '../redux/authReducer';

const AUTH_SIGIN_PATH = '/api/auth/signin';
const PROFILE_ME_PATH = '/api/profile/me';

function useAuth() {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);

  // Create an instance of Axios
  // For improvements, you can make a dedicated class
  // to avoid using the same axios library all over the place
  const http = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
  });

  const login = async (email, password) => {
    try {
      const { data } = await http.post(AUTH_SIGIN_PATH, { email, password });
      const { token } = data;
      dispatch(AUTH_TOKEN(token));

      const user = await fetchUser(token);

      dispatch(AUTH_USER(user));

      return user;
    } catch (error) {
      throw Error(resolveErrorMessage(error));
    }
  };

  const fetchUser = async (token) => {
    try {
      const { data } = await http.get(PROFILE_ME_PATH, {
        headers: {
          Authorization: `Bearer ${token}`, // Recommended way to send Bearer Token
        },
      });

      return data;
    } catch (error) {
      throw Error(resolveErrorMessage(error));
    }
  };

  const logout = () => {
    dispatch(AUTH_LOGOUT());
  };

  const resolveErrorMessage = (error, defaultMessage = 'Error') => {
    if (error.isAxiosError) {
      if ('message' in error.response.data) {
        return error.response.data.message;
      }

      return error.message;
    }

    return defaultMessage;
  };

  return {
    auth,
    fetchUser,
    login,
    logout,
  };
}

export default useAuth;
