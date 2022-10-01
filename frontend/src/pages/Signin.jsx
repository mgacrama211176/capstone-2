import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../media';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loginFailed, loginStart, loginSuccess } from '../redux/userSlice';

//firebase
import { auth, googleProvider, facebookProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

//MUI
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

//Icons
import Facebook from '../assets/icons/facebook.png';
import Gmail from '../assets/icons/gmail.png';

//Framer Motion
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

//Toastify
import { userNotFound, incorrectPassword, blank } from '../components/Toasts';
import { toast, ToastContainer } from 'react-toastify';

//js-cookie
import Cookies from 'js-cookie';
import useAuth from '../hooks/useAuth';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.titleColor};
  font-family: 'Roboto', sans-serif;

  /* Mobile S */
  @media ${device.mobileS} {
    max-width: 320px;
    margin: 0px 0px;
  }

  /* Mobile M */
  @media ${device.mobileM} {
    max-width: 424px;
  }

  /* Mobile L */
  @media ${device.mobileL} {
    max-width: 767px;
  }

  /* Tablet */
  @media ${device.tablet} {
    max-width: 1023px;
  }

  /* Tablet */
  @media ${device.laptopL} {
    max-width: 1919px;
  }
  /* Desktop */
  @media ${device.desktop} {
    max-width: 2559px;
  }
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: ${({ theme }) => theme.bg};
  padding: 20px 50px;
  border: 1px solid;
  gap: 10px;
  border-radius: 20px;
  max-width: 50%;
  margin-top: 2em;
`;

const Image = styled.img`
  max-width: 25%;
`;

const Title = styled.h1`
  margin-bottom: 10px;

  @media ${device.mobileS} {
    font-size: 20px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Icons = styled.img`
  max-width: 5%;
  cursor: pointer;

  /* Mobile S */
  @media ${device.mobileS} {
    max-width: 2em;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const H4 = styled.h4``;

const HrContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #b2792d;
  max-width: 10px;
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 5px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: bolder;
  cursor: pointer;
  padding: 10px;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px solid white;
  color: ${({ theme }) => theme.textSoft};
  background-color: ${({ theme }) => theme.bg};
  transition: 0.5s ease-in;
  width: 15em;
  justify-content: center;
  &:hover {
    background-color: #fca326;
    color: white;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 50px;
  margin: 5px 0px 40px 0px;
`;

const H6 = styled.h6`
  cursor: pointer;
  transition: 0.2s ease-in;
  color: white;
  &:hover {
    color: #fca326;
    text-decoration: underline;
  }
`;

const Signin = () => {
  const nav = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const { login, getUser } = useAuth();

  const onChangeHandle = (e) => {
    const newUser = { ...user };
    newUser[e.target.id] = e.target.value;
    setUser(newUser);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;

    // Normally this is unnecessary since required attribute has been added
    // But, this is a fallback incase the browser do not support required attributes i.e Safari
    // For improvements, you can add a validation library to validate form
    // 👇
    if (email === '' || password === '') {
      setHasError(true);

      return;
    }

    dispatch(loginStart());

    try {
      const user = await login(email, password);

      // No need for this because of the custom hook we created
      // 👇
      // const login = await axios.post(
      //   import.meta.env.VITE_BACKEND_URL + '/api/auth/signin',
      //   {
      //     email,
      //     password,
      //   }
      // );

      dispatch(loginSuccess(user));
      nav('/');
    } catch (error) {
      console.log(error);
      dispatch(loginFailed(error.message));
      toast.error(error.message);
    }
  };

  const signInWithGoogle = () => {
    dispatch(loginStart());
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        const googleUser = axios
          .post('http://localhost:4000/api/auth/google', {
            username: result.user.displayName,
            email: result.user.email,
            image: result.user.photoURL,
          })
          .then((response) => {
            dispatch(loginSuccess(response.data));
          });
        console.log(googleUser);
        nav('/');
      })
      .catch((error) => {
        dispatch(loginFailed());
      });
  };

  const signInWithFacebook = async () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {});
  };

  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: '100%', opacity: 1 }}
      exit={{
        x: window.innerWidth,
        y: window.innerHeight,
      }}
      // transition={{'1s'}}
    >
      <Container>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <LoginWrapper>
          {/* <Image src={Logo}></Image> */}
          <Title>Login Using</Title>
          <IconsContainer>
            <Icons
              src={Facebook}
              alt="facebook"
              onClick={signInWithFacebook}
            ></Icons>
            <Icons src={Gmail} alt="gmail" onClick={signInWithGoogle}></Icons>
          </IconsContainer>
          <HrContainer>
            <Hr />
            Or
            <Hr />
          </HrContainer>
          <H4> Email Address </H4>
          <form onSubmit={handleLogin}>
            <InputWrapper>
              <EmailIcon />
              <Input
                id="email"
                placeholder="E-Mail@user.com"
                type="text"
                onChange={(e) => {
                  onChangeHandle(e);
                }}
                required
              />
            </InputWrapper>
            <H4> Password </H4>
            <InputWrapper>
              <LockIcon />
              <Input
                id="password"
                placeholder="Password"
                type="password"
                onChange={(e) => {
                  onChangeHandle(e);
                }}
                required
              />
            </InputWrapper>

            <InputWrapper>
              <Button type="submit">
                Login
                <LoginIcon />
              </Button>
            </InputWrapper>
          </form>

          <Options>
            <Link to={'/signup'} style={{ textDecoration: 'none' }}>
              <H6>Not yet registered? </H6>
            </Link>
            <Link to={'/Fpassword'} style={{ textDecoration: 'none' }}>
              <H6>Forgot Password </H6>
            </Link>
          </Options>
        </LoginWrapper>
      </Container>
    </motion.div>
  );
};

export default Signin;
