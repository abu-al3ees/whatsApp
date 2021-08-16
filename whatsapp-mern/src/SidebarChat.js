import React from 'react'
import { Avatar,IconButton } from '@material-ui/core';
import './sidebarChat.css'

function SidebarChat() {
    return (
        <div className='sidebarChat'>
         <Avatar/>
         <div className='sidebarChat_info'>
             <h2>Room Name</h2>
             <p>last messege in the room</p>
             
             </div>   
        </div>
    )
}

export default SidebarChat
