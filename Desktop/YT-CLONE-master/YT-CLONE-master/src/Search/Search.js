import React, { useEffect, useState } from 'react'
import './Search.css'
import { useParams } from 'react-router';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
// import TuneOutlinedIcon from "@material-ui/core/TuneOutlined"
// import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TuneIcon from '@material-ui/icons/Tune';
import axios from 'axios';


function Search() {
    const searchTerm=useParams();
    const [channeldata,setChannelData]=useState('');
    const [videodata,setVideoData]=useState([]);
    const newterm=searchTerm.term;
   
    const fetchChannel=()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchTerm}&safeSearch=none&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
        .then((response)=>{
            setChannelData(response.data.items[0])
            //console.log(response.data.items[0])
        })
        .catch((error)=>console.log(error))
    }
    const fetchVideoRow=()=>{
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&type=video&q=${newterm}&safeSearch=none&key=AIzaSyA3eeldWJ_fFubKEdB4M6XaGk-7RIgHOt8`)
        .then((response)=>{
            setVideoData(response.data.items)
            console.log(response.data)
        })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{
        fetchChannel();
        fetchVideoRow();
    },[searchTerm])

    return (
        <div className="search_page">
            <div className="search_channel">
            <TuneIcon/>
            <h2>FILTERS</h2>
            </div>
            <hr/>
            <ChannelRow channeldata={channeldata}/>
            <hr/>
            {/* {
                videodata.map((item)=>{
                    return <VideoRow key={item.id} {...item}/>
                //   return  console.log(video)
                })
            } */}
        </div>
    )
}

export default Search
