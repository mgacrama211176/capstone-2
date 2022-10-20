import { getStorage, ref, deleteObject } from "firebase/storage";
import axios from "axios";

//TOASTER
import { DeleteVideoNotif } from "./Toasts";

export const DeleteVideoData = async ({ video }) => {
  const storage = getStorage();
  const videoDelete = ref(storage, video.videoUrl);
  const imgDelete = ref(storage, video.imgUrl);

  console.log(video._id);
  try {
    //delete Videodata on Mongo
    const deleting = await axios.delete(
      `http://localhost:4000/api/videos/${video._id}`
    );
    //delete video on firebase
    deleteObject(videoDelete);
    deleteObject(imgDelete);

    console.log(`deleted from database`);
    DeleteVideoNotif();
  } catch (error) {
    console.log(error);
  }
};
