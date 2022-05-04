import React from 'react'
import Videocard from './Videocard'
import './Videos.css'

const Videos = () => {
  return (
    <div className='videos__main'>
        <h2>Recommended videos</h2>
        <Videocard/>
        <Videocard/>
    </div>
  )
}

export default Videos