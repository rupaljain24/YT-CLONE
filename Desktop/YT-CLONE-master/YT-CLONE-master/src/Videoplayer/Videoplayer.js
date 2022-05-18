import React from 'react'
import YouTube from 'react-youtube';
//import { useParams } from 'react-router'

const Videoplayer = ({videoId}) => {
    // const videoId=useParams()
    // console.log(videoId);
    return (
        <div>
            <YouTube
            width={740}
            videoId={videoId}
            />
            {/* VideoPlayer {videoId.term} */}
        </div>
    )
}

export default Videoplayer
