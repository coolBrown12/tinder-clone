import React from 'react'
import Person2Icon from '@mui/icons-material/Person2';
import MessageIcon from '@mui/icons-material/Message';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useHistory } from 'react-router-dom'; 
import  './header.css'
function Header({ backButton }) {
  const history = useHistory();
  
  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={()=> history.replace(backButton)}>
          <ArrowBackIosIcon fontSize='large' className='header_icon' />
        </IconButton>
      ) : (
        <IconButton>
          <Person2Icon fontSize='large' className='header_icon' />
        </IconButton>
      )}
      <Link to='/'>
        <img src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png' className='header__logo' alt='tinder'></img>
      </Link>
      <Link to='/chat'>
        <IconButton>
          <MessageIcon fontSize='large' className='header_icon' />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;