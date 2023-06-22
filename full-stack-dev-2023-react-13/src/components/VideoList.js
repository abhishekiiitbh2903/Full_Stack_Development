import Video from './Video';
import PlayButton from './PlayButton';
import useVideos from '../hooks/Videos';
import { useCallback, useMemo } from 'react';


function VideoList({ editVideo }) {
  const videos = useVideos();
  
  // const url = 'https://my.api.mockaroo.com/video.json?key=2a12c4d0';
  // const dispatch = useVideoDispatch();

  // async function handleClick() {
  //   const res = await axios.get(url);
  //   console.log('getVideos', res.data);
  //   dispatch({ type: 'LOAD', payload: res.data });
  // }

  // useEffect(() => {
  //   async function getVideos() {
  //     const res = await axios.get(url);
  //     console.log('getVideos', res.data);
  //     dispatch({ type: 'LOAD', payload: res.data });
  //   }
  //   getVideos();
  // }, [dispatch]);

  const play = useCallback(() => console.log('Playing..'), []);
  const pause = useCallback(() => console.log('Pause..'), []);
  const memoButton = useMemo(() => (
    <PlayButton onPlay={play} onPause={pause}>
      Playing...
    </PlayButton>
  ),[pause, play]);
  // playButton in itself is a value so for memoizing the value we have taken usecase of usememo and for memoizing the function which are onplay and onpause we have used the usecallback..
  return (
    <>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          editVideo={editVideo}
        >
          {memoButton}
        </Video>
      ))}
      {/* <button onClick={handleClick}>Get Videos</button> */}
    </>
  );
}

export default VideoList;
