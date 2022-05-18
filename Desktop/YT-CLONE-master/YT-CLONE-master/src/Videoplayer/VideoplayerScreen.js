import React from 'react'
//import VideoInfo from './VideoInfo'
import axios from 'axios'
import { useParams } from 'react-router'
import Videoplayer from './Videoplayer'
import { useEffect } from 'react'

const VideoplayerScreen = () => {
      const videoId=useParams()
      const videoIdTerm=videoId.videoId;
    console.log(videoIdTerm);
    useEffect(()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
    },[videoId])
    return (
        <div>
            <Videoplayer videoId={videoIdTerm}/>
            {/* <VideoInfo/> */}
        </div>
    )
}

export default VideoplayerScreen
