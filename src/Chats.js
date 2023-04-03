import React from 'react';
import Chat from './Chat';
import './chat.css'

function Chats() {
  return (
    <div className='chats'>
        <Chat
            name="yash"
            message="yo whats up"
            timestamp="40 seconds ago"
            profilepic=" https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0109135036667.58bc69814ea0f.jpg">
        </Chat>
        <Chat
            name="yash"
            message="yo whats up"
            timestamp="40 seconds ago"
            profilepic="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0109135036667.58bc69814ea0f.jpg ">
        </Chat>
        <Chat
            name="yash"
            message="yo whats up"
            timestamp="40 seconds ago"
            profilepic="https://mir-s3-cdn-cf.behance.net/project_modules/1400/e0109135036667.58bc69814ea0f.jpg ">
        </Chat>
        <Chat
            name="yash"
            message="yo whats up"
            timestamp="40 seconds ago"
            profilepic=" ">
        </Chat>
      
    </div>
  )
}

export default Chats
