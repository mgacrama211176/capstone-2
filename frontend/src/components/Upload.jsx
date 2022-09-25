import { height } from '@mui/system';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #4b4b4b55;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  border-radius: 15px;
  align-items: center;
`;

const Close = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-weight: bolder;
  width: 20px;
  transition: 2s ease;
  &:hover {
    color: #b2792d;
    background-color: white;
    border-radius: 50px;
  }
`;

const Title = styled.h1``;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.bg};
  border-radius: 3px;
  padding: 10px;
  background-color: white;
  color: black;
  width: 500px;
`;

const TextArea = styled.textarea`
  border: 1px solid ${({ theme }) => theme.bg};
  width: 500px;
  border-radius: 3px;
  padding: 10px;
  background-color: white;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border-color: transparent;
  background-color: #132550;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: bolder;
  color: white;
  &:hover {
    background-color: #b2792d;
    color: white;
    font-weight: bolder;
  }
`;

const Select = styled.select`
  width: 500px;
`;

const Option = styled.option``;

const Label = styled.label``;

const Upload = ({ setOpenModal }) => {
  const [thumbnail, setThumbnail] = useState(undefined);
  const [video, setVideo] = useState(undefined);

  return (
    <Container>
      <Wrapper>
        <Close onClick={() => setOpenModal(false)}>X</Close>

        <Title>Upload video</Title>
        <Input type="file" accept="video/*" onChange={(e) => SetVideo()} />
        <Input type="text" placeholder="Title" id="title" />
        <TextArea placeholder="Description" rows={8}></TextArea>
        <Select name="tags" id="tags">
          <Option value="Traditional Animation">Traditional Animation</Option>
          <Option value="2D animation">2D animation</Option>
          <Option value="3D animation">3D animation</Option>
          <Option value="Motion Graphics">Motion Graphics</Option>
          <Option value="Stop Motion">Stop Motion</Option>
        </Select>
        <Label>Thumbnail</Label>
        <Input
          type="file"
          accept="image/*"
          placeholder="Thumbnail"
          onChange={(e) => setThumbnail()}
        />
        <Button>Upload</Button>
      </Wrapper>
    </Container>
  );
};

export default Upload;
