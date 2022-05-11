import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons//VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';

function Header() {
  return (
    <div className='header'> 
        <div className='header__left'>
        <MenuIcon/>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''/>
        </div>
        <div className='header__center'>
        <input type="text" placeholder='Search' />
        <SearchIcon/>
         </div>
        
       <div className='header__right'>
       <VideoCallIcon className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar className='header__icon'/>
       </div>
       
        </div>
  )
}

export default Header