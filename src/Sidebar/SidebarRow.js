import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import './SidebarRow.css'

function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarrow ${selected ?'selected' :''}`}>
        {/* <i>{Icon}</i> */}

        <Icon className='sidebar__icon'/>
        <h2 className='sidebarrow__title'>{title}</h2>
    </div>
  )
}

export default SidebarRow