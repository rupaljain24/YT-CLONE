import axios from 'axios';
import React, { useEffect,useState } from 'react'
import ReactTimeAgo from 'react-time-ago'
import './VideoRow.css'

// {views, description, timestamp, channel, title, image}
function VideoRow({id,snippet}) {

  const [count, setCount] = useState(0)
  //const channelId=snippet.channelId;
  const videoId=id.videoId;
  const title=snippet.title;
  const time=snippet.publishedAt;
  const img=snippet.thumbnails.default.url;
  const channelTitle=snippet.channelTitle
  const description=snippet.description;

  useEffect(()=>{
    axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
    .then((response)=>{
      return setCount(response.data.items[0].statistics.viewCount)
    })
  },[ ])

    return (
       <div className='videorow'>
       <img src={img} alt="" />
       <div className="videorow__text">
           <h3>{title}</h3>
           <p className='videorow__headline'>
           {channelTitle} •  {count} views • <ReactTimeAgo date={time} locale="en-US"/>
           </p>
           <p className='videorow__description'>
             {description}
           </p>
       </div>
     </div>
    )
}

export default VideoRow
