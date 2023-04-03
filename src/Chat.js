import React from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './ch.css'

function Chat({name,profilepic,message,timestamp}) {
  return (
    <div className='chat'>
        {profilepic ? (<img src={profilepic} alt={name} className='set_photo'></img>
        ):
        (
            <AccountBoxIcon fontSize='large'></AccountBoxIcon>
        )}
        <div className='chat_detail'>

        <h2>{name}</h2>
        <p>{message}</p>
        </div>
        
      
        <p className='chat_timestamp'>{timestamp}</p>
    </div>
  )
}

export default Chat
