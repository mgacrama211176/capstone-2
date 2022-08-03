import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../assets/Logo.png";
import { device } from "../media";

//MUI
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryIcon from "@mui/icons-material/Category";

//Icons
import Facebook from "../assets/icons/facebook.png";
import Gmail from "../assets/icons/gmail.png";
import Linkedin from "../assets/icons/linkedin.png";
import PersonIcon from "@mui/icons-material/Person";

//Framer Motion
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

//fetch data
import Terms from "../assets/terms.pdf";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(90vh - 56px);
  color: ${({ theme }) => theme.titleColor};
  font-family: "Roboto", sans-serif;
`;

const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
  background-color: ${({ theme }) => theme.bg};
  padding: 10px 25px;
  border: 1px solid;
  gap: 10px;
  border-radius: 20px;
  max-width: 50%;

  /* LAPTOP */
  @media ${device.laptop} {
    max-width: 50%;
    padding: 5px 50px;
    gap: 5px;
    margin-top: 50px;
  }
`;

const Image = styled.img`
  max-width: 25%;
  @media ${device.laptop} {
    max-width: 20%;
    margin: -10px;
  }
`;

const Title = styled.h1`
  margin-bottom: 10px;
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
const Select = styled.select`
  /* LAPTOP */
  @media ${device.laptop} {
    width: 180px;
    text-align: center;
  }
`;
const Option = styled.option``;

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Signup = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    fetch(Terms)
      .then((row) => row.text())
      .then((text) => {
        console.log("text:", text);
        setTerms(text);
      });
  };
  const handleClose = () => setOpen(false);

  const [terms, setTerms] = useState("");
  return (
    <motion.div
      initial={{ width: 0, opacity: 0 }}
      animate={{ width: "100%", opacity: 1 }}
      exit={{
        x: window.innerWidth,
        y: window.innerHeight,
      }}
    >
      <Container>
        <LoginWrapper>
          <Image src={Logo}></Image>
          <Title>Signup Using</Title>
          <IconsContainer>
            <Icons src={Facebook} alt="facebook"></Icons>
            <Icons src={Gmail} alt="gmail"></Icons>
            <Icons src={Linkedin} alt="linkedin"></Icons>
          </IconsContainer>
          <HrContainer>
            <Hr />
            Or
            <Hr />
          </HrContainer>
          <H4> Email Address </H4>
          <InputWrapper>
            <EmailIcon />
            <Input placeholder="Username@user.com" type="text" />
          </InputWrapper>

          <H4> User Name </H4>
          <InputWrapper>
            <PersonIcon />
            <Input placeholder="User Name" type="text" />
          </InputWrapper>

          <H4> User Category </H4>
          <InputWrapper>
            <CategoryIcon />
            <Select id="category">
              <Option value="Viewer">Viewer</Option>
              <Option value="Animator">Animator</Option>
              <Option value="Employer">Employer</Option>
            </Select>
          </InputWrapper>

          <H4> Password </H4>
          <InputWrapper>
            <LockIcon />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
          </InputWrapper>

          <InputWrapper>
            <Button onClick={handleOpen}>
              SignUp
              <LoginIcon />
            </Button>
          </InputWrapper>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>{terms}</Box>
          </Modal>

          <Options>
            <Link to={"/signin"} style={{ textDecoration: "none" }}>
              <H6>Already Signed up? </H6>
            </Link>
            <H6>Forgot Password </H6>
          </Options>
        </LoginWrapper>
      </Container>
    </motion.div>
  );
};

export default Signup;
