import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './Videocard.css';
import Avatar from '@material-ui/core/Avatar';
import ReactTimeAgo from 'react-time-ago'

function Videocard({id,snippet,statistics}) {
 const[channelImg,setChannelImg]= useState('')
  let title=snippet.title;
  let channel=snippet.channelTitle;
  let views=statistics.viewCount;
  let videoImg=snippet.thumbnails.medium.url;
  let timestamp=snippet.publishedAt;

  let channelId=snippet.channelId;
  if(views>=10000000){
    views=(views/1000000).toFixed(2) +"M";
  }
    else if(views>=1000){
      views=(views/1000).toFixed(2) +"K";
    }
  useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
    .then((response)=>{
      setChannelImg(response.data.items[0].snippet.thumbnails.default.url)
      // console.log(channelImg)
      // debugger
       //console.log(response.data.items[0].snippet.thumbnails.default.url);
    }) 
  }
  , [])
  return (
    <div className='videocard'>
    <img className='videocard__image' src={videoImg} alt='' />
    <div className="video_info">
    <Avatar className='video_channelImg' src={channelImg} alt={channel}/>
    <div className="video_description">
      <h4>{title}</h4>
      <p>{channel}</p>
      <p>{views} views •<ReactTimeAgo date={timestamp} locale="en-US"/></p>
      {/* <p>{views} views • {timestamp}</p> */}
    </div>
    </div>
    </div>
  )
}

export default Videocard