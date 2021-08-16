import React from 'react';
import './sidebar.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar,IconButton } from '@material-ui/core';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
            <Avatar src='#'/>
            <div className='sidebar_headerright'>
              
<IconButton>
    <DonutLargeIcon/>
    </IconButton>
    <IconButton>  
          <ChatIcon/>
      </IconButton>
<IconButton>
<MoreVertIcon/>

</IconButton>
 
          </div>
         
            </div> 
            <div className='sidebar_search'>
<div className='sidebar_searchContainer'>
<SearchIcon/>
<input placeholder='search here ...' type='text'/>
    
</div>
   </div>
   <div className='sidebar_chats'>
       <SidebarChat/>
       <SidebarChat/>
       <SidebarChat/>
   </div>
        </div>
    )
}

export default Sidebar
