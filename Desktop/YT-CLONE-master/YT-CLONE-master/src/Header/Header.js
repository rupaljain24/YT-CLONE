import React from 'react'
import './Header.css';
import {Link} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import VideoCallIcon from '@material-ui/icons//VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react';

function Header() {
  const [searchTerm,setSearchTerm]=useState("");
  return (
    <div className='header'> 
        <div className='header__left'>
        <MenuIcon/>
        <Link to='/'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'
                alt=''/>
        </Link>
        
        </div>
        <div className='header__center'>
        <input type="text" placeholder='Search' 
        value={searchTerm} 
        onChange={(e)=>setSearchTerm(e.target.value)} />
        <Link to={`/search/${searchTerm}`}>
        <SearchIcon />
        </Link>
        
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