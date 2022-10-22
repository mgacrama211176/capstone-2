import React, { useState } from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

const Container = styled.div`
  margin: 20px;
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

const textfieldStyle = {
  display: "flex",
  m: 2,
};

const UpdateVideoModal = ({ video }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    console.log(video);
  };
  const handleClose = () => setOpen(false);
  const [category, setCategory] = useState(video.tags[0]);

  //ARRAY OF OBJECTS FOR THE OPTIONS
  const categories = [
    { value: "Traditional Animation", label: "Traditional Animation" },
    { value: "2D Animation", label: "2D Animation" },
    { value: "3D Animation", label: "3D Animation" },
    { value: "Motion Graphics", label: "Motion Graphics" },
    { value: "Stop Motion", label: "Stop Motion" },
  ];

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <Button onClick={handleOpen} variant="contained">
        UPDATE
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate autoComplete="on">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Video Information
          </Typography>
          <Container>
            <TextField
              sx={textfieldStyle}
              variant="outlined"
              label="Title"
            ></TextField>
            <TextField
              select
              value={category}
              onChange={handleChange}
              sx={textfieldStyle}
              variant="outlined"
              label="Category"
              helperText="Please select the correct CATEGORY"
            >
              {categories.map((category) => (
                <MenuItem key={category.value} value={category.value}>
                  {category.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              sx={textfieldStyle}
              variant="outlined"
              label="Description"
              multiline
            ></TextField>
            <Button variant="contained">SUBMIT</Button>
          </Container>
        </Box>
      </Modal>
    </Container>
  );
};

export default UpdateVideoModal;
