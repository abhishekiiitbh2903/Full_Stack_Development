import './Video.css';

function Video({title,channel="Coder Dost",views,time}) {
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="http://placeimg.com/160/90/any" alt="Abhishek Singh" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel}</div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;
