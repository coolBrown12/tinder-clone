import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import  './header.css'

function header() {
  return (
    <div className='header'>
        <IconButton>

      <Person2Icon fontSize='large' className='header_icon'/>
      </IconButton>
      <img src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' className='header__logo' alt='tinder'></img>
      <IconButton>

      <MessageIcon fontSize='large' className='header_icon'/>
      </IconButton>
    </div>
  )
}

export default header
