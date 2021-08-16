import { Avatar,IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import React from 'react'
import './chat.css';
import axios from './axios';
// import  useState  from "react";
import { useState } from "react";

function Chat({messages}) {
const [input, setInput] =  useState('');
const sendMessage=async (e)=>{
    e.preventDefault()


    await axios.post('/messages/new',{
        
            message: input,
            name: "demo",
            current_date: "just now",
            recevid: false
            
    });
    setInput('');
}

    return (
        <div className='chat'>
          <div className='chat_header'>
              <Avatar/>
              <div className='chatHeader_info'>
                  <h3>Room Name</h3>
                  <p>Last seen at...</p>
              </div>

              <div className='chatHeader_right'>
              <IconButton>
              <SearchOutlined/>
    </IconButton>

    <IconButton>
    <AttachFile/>
    </IconButton>
           <IconButton>
    <MoreVert/>
           </IconButton>


              </div>
          </div>
         <div className='chatBody' >
         {messages.map((message)=>(
              <p className={`chat_message ${message.recevid  && 'chat_message_recever'}`  }>
              <span className='chat_name'>{message.name}</span>
               <span>{message.message}</span>
                <span className='current_data'> {message.current_date}</span>
                  </p>

         ))}
            
             </div>    
                   <div className='chat_footer'>
                       <InsertEmoticon/>

                       <form>
                           <input value={input}
                           onChange={(e)=>setInput(e.target.value)}
                           placeholder='Type your message here..' type='text' />
                           <button onClick={sendMessage} type='submit'>
                               send 
                           </button>
                       </form>
                       <MicIcon/>
                   </div>
        </div>
    )
}

export default Chat
