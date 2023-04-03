import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import './SwipeButton.css'
import IconButton from '@mui/material/IconButton';


function SwipeButtons() {
  return (
    <div className='SwipeButton'>
    <IconButton className='swipeButtons_repeat'>

      <ReplayIcon fontSize='large'/>
    </IconButton>
    <IconButton className='swipeButtons_star'>

    
      <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_right'>

      
      <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButtons_lighting'>
      <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton>

      <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
