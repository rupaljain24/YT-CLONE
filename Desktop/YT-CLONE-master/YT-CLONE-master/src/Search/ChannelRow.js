import { Avatar } from '@material-ui/core'
import React from 'react'
import './ChannelRow.css'

function ChannelRow(props) {
    //image, channel, subs, noOfVideos, description}    
    //let snippet=props.channeldata.snippet;
    //let description=snippet.description;
    //console.log(props.channeldata.snippet.description)
    //const img=snippet.thumbnails.default.url

    return (
        <div className='channelRow'>
            <Avatar className='channelRow_avatar' alt='' src=''/>
            <div className='channelRow_desc'>
                <h4>channel name</h4>
                <p> subscribers • noOfVideos videos</p>
                {/* <p>{description}</p> */}
            </div>


        </div>
    )
}

export default ChannelRow
