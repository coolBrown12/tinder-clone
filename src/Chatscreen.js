import React, { useState } from 'react'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import './Chatscreen.css'

function Chatscreen() {

    const [messages, setMessage]=useState([
        {
        name:'ellen',
        image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0109135036667.58bc69814ea0f.jpg',
        message: 'whast up',
        },
        {
            name:'ellen',
            image:'https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0109135036667.58bc69814ea0f.jpg',
            message:'how it going to you brother'
        }
    ])
  return (
    <div className='chatscreen'>
      <p>You matched with the ellen</p>
      {messages.map((message)=>(
        <div className='chatscreen_message'>
            {message.image ? (<img src={message.image} alt={message.name} className='set_photo'></img>
        ):
        (
            <AccountBoxIcon fontSize='large'></AccountBoxIcon>
        )}
            <p className='chatscreen_text'>{message.message}</p>
        </div>
      ))}
    </div>
  )
}

export default Chatscreen
