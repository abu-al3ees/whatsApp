
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Pusher from 'pusher-js';
import React, { useEffect, useState } from "react";
import axios from './axios';

function App() {
  const [messages,setMessages]=useState([]);
useEffect(() => {
 axios.get('/messages/sync').then((respons)=>{

setMessages(respons.data);
 })
  
  
}, [])

useEffect(() => {
 
  const pusher = new Pusher('076831c1203e0278bf99', {
    cluster: 'eu'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage)=> {
    // alert(JSON.stringify(newMessage));
    setMessages([...messages,newMessage])
  });
  return ()=>{
    channel.unbind_all();
    channel.unsubscribe();
  }
}, [messages])
console.log(messages);
  return (
    <div className="app">

     <div className='app_body'>
     <Sidebar />
      <Chat messages={messages}/> 
     </div>
 

    </div>
  );
}

export default App;
