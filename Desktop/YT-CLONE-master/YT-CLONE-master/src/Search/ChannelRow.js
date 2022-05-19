import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './ChannelRow.css'
import axios from 'axios';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
function ChannelRow(props) {
    //image, channel, subs, noOfVideos, description}
    const [subs,setSubs]=useState({
        subs:0,
        noofvideos:0
    });
    let subscriber=subs?.subscriberCount;
    let videocount=subs?.videoCount;    
    let snippet=props.channeldata?.snippet;
    //let channelId=snippet?.channelId;
    let channelId=props.channeldata?.id.channelId;
    let description=snippet?.description;
    let channelTitle=snippet?.title;
    let avatarImg=snippet?.thumbnails?.default?.url;


    useEffect(() => {
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
    .then((response)=>{
        //if(response.data.items?.length > 0)
        setSubs(response.data?.items[0]?.statistics);
        // console.log(response.data)
       
    })
    }, [])
    return (
        <div className='channelRow'>
            <Avatar className='channelRow_avatar' alt={channelTitle} src={avatarImg}/>
            <div className='channelRow_desc'>
                <h4>{channelTitle}</h4>
                <p> {subscriber} • {videocount} videos</p>
                <p>{description}</p>
            </div>
            <div className="channel_subscribe">
                <button className="subscribe_btn">Subscribe</button>
                <NotificationsNoneIcon/>
            </div>
        </div>
    )
}

export default ChannelRow
