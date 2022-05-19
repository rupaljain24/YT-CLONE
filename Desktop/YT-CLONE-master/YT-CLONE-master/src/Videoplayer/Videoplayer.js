import React from 'react'
import YouTube from 'react-youtube';
import './Videoplayer.css'
//import { useParams } from 'react-router'

const Videoplayer = ({videoId}) => {
    // const videoId=useParams()

    return (
        <div>
            <iframe id="ytplayer" type="text/html"
  src={`https://www.youtube.com/embed/${videoId}`}
  frameBorder="0"></iframe>
           
        </div>
    )
}

export default Videoplayer
