import React from 'react'
import './VideoInfo.css'
import { useEffect,useState } from 'react';
import axios from 'axios';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ReplyIcon from '@material-ui/icons/Reply';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Avatar, Button } from '@material-ui/core';
import SidebarRow from '../Sidebar/SidebarRow';

const VideoInfo = (props) => {
    const [videoData, setVideoData] = useState([])

    const snippet=props.videoInfo?.snippet;
    const statistics=props.videoInfo?.statistics;
    const channelId=props.videoInfo?.channelId;
    const title=snippet?.title;
    const description=snippet?.description;
    const publishedDate=snippet?.publishedAt;
    const channelTitle=snippet?.channelTitle;
    const likes=statistics?.likeCount;
    const views=statistics?.viewCount;
    console.log(channelId)

    useEffect(() => {
        axios.get
        (`https://www.googleapis.com/youtube/v3/channels?part=snippet%2C%20statistics&id=UC6GyAvKjJ-hMBx-X_xHxwbg&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
        .then((response)=>{
            console.log(response.data.items)
            //setVideoData(response.data.items[0])
          setVideoData(response.data.items[0].snippet.thumbnails.default.url)
        }) 
    }, [])
    //console.log(videoData)

    return (
        <div className="videoinfo">
             <div className='videoinfo__headline'>
                <h1>{title}</h1>
            </div>
            <div className='video_statistics'>
                <p> {views} views - {publishedDate} </p>
                <div className='likes_column'>
                <SidebarRow Icon={ThumbUpIcon} title={likes}/>
                <SidebarRow Icon={ThumbDownIcon} title="Dislike"/>
                <SidebarRow Icon={ReplyIcon} title='Share'/>
                <SidebarRow Icon={PlaylistAddIcon} title='Save'/>
                <SidebarRow Icon={MoreHorizIcon} title=''/>   
                </div>
            </div>
           <hr/> 
           <div className="videoinfo__channel">
                <div>
                    <Avatar 
                        className='videoinfo__avatar' 
                        alt={channelTitle} 
                        src={videoData}
                        // src={channelImage} 
                    />
                    <div className='videoinfo__channelinfo'>
                        <h3 className='videoinfo__channeltitle'>{channelTitle}</h3>
                        <p className='videoinfo__channelsubs'> subscribers</p>
                    </div>
                    
                </div>
                <div className='videoinfo__subscribe'>
                    <Button color='secondary' >SUBSCRIBE</Button>
                </div>
            </div>
            <div className='videoinfo__channeldesc'>
                <p>{description}</p>
            </div>
          
        </div>
    )
}

export default VideoInfo
