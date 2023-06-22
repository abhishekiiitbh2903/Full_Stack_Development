import Video from "./Video";
import PlayButton from "./PlayButton";
import useVideos from "../hooks/Videos";

function VideoList({editVideo}){
  //  const url ="https://my.api.mockaroo.com/video.json?key=2a12c4d0"

   const videos = useVideos()
  //  const dispatch = useVideoDispatch();

  //  async function handleClick (){
  //   const res = await axios.get(url);
  //   dispatch({type:'LOAD',payload:res.data})
  //  }
// this above will run once user submits on getVideos button as it will make api call and return the value 

  // useEffect(()=>{
  //   async function getVideos (){
  //     const res = await axios.get(url);
  //     dispatch({type:'LOAD',payload:res.data})
  //    }
  //    getVideos()
  // },[dispatch])
// Use effect is used to mount something from backend once the site loads 

    return(
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
              <PlayButton
                onPlay={() => console.log('Playing..',video.title)}
                onPause={() => console.log('Paused..',video.title)}
              >
                {video.title}
              </PlayButton>
            </Video>
          ))}
          {/* <button onClick={handleClick}>Get Videos</button> */}
          </>
    )
}

export default VideoList