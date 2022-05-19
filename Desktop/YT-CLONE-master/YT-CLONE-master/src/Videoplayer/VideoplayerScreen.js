import React from 'react'
import VideoInfo from './VideoInfo'
import axios from 'axios'
import { useParams } from 'react-router'
import Videoplayer from './Videoplayer'
import { useEffect,useState } from 'react'

const VideoplayerScreen = () => {
    const [videoInfo, setvideoInfo] = useState([])
      const videoId=useParams();
      const videoIdTerm=videoId.videoId;
    //console.log(videoIdTerm);
    const fetchVideoInfo=()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoIdTerm}&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
        .then((response)=>{
                setvideoInfo(response.data.items[0])
                console.log(response.data.items[0])    
                })
        .catch((error)=>console.log(error))
    }
    useEffect(()=>{
        fetchVideoInfo();
    },[videoId])
    return (
        <div>
            <Videoplayer videoId={videoIdTerm}/>
            <VideoInfo  videoInfo={videoInfo}/>
        </div>
    )
}

export default VideoplayerScreen
