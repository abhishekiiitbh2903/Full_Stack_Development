import './AddVideo.css';
import {useState} from 'react';

const initialState = {
    channel: 'Abhishek Singh IIITIAN',
    verified: false,
    title:'',
    views:'',
    time:''
  }

function AddVideo({addVideos}) {
  const [video, setVideo] = useState(initialState);

  function handleSubmit(e) {
    e.preventDefault();
    addVideos(video)
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  return (
    <form>
      <input
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <input
        type="text"
        name="time"
        onChange={handleChange}
        placeholder="time"
        value={video.time}
      />
      <input
        type="text"
        name="verified"
        onChange={handleChange}
        placeholder="isverified?"
        value={video.verified}
      />
      <button
        onClick={handleSubmit}
      >
        Add Video
      </button>
    </form>
  );
}

export default AddVideo;
