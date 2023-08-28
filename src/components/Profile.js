import React, { useState } from 'react';
import "../profile.css";
import profile from "../assets/New folder/profile.png"
import TicketCart from './SettingPage/TicketCart';
import Setting from './SettingPage/Setting';
import About from './SettingPage/About';
import Contact from './SettingPage/Contact';
import { useSelector } from 'react-redux';

function Profile() {
  const [user,setuser] = useState("praveenkumar@gmail.com")
  const [ticketcart,setticketcart] = useState(true);
  const [setting,setsetting] = useState(false);
  const [about,setabout] = useState(false);
  const [contact,setcontact] = useState(false);
  const data = useSelector((state)=>state.data.cart);
  return (
    <div className='profile'>
      <div className='side-con'>
        <div className='side-head'>
          <div className='img--conss'>
            <img src={profile} title='Profile'></img>
          </div>
          <div className='profile-detail'>
            <h4>{user}</h4>
            <p>profile</p>
          </div>
        </div>
        <div className='setting'>
          <p onClick={()=>{
            setticketcart(true);
            setabout(false);
            setcontact(false);
            setsetting(false);
            
          }}>Tickets {data.length}</p>
          <p onClick={()=>{
            setticketcart(false);
            setabout(false);
            setcontact(false);
            setsetting(true);
          }}>Setting</p>
          <p onClick={()=>{
            setticketcart(false);
            setabout(true);
            setcontact(false);
            setsetting(false);

          }}>About</p>
          <p onClick={()=>{
            setticketcart(false);
            setabout(false);
            setcontact(true);
            setsetting(false);
          }}>Contact Me</p>
        </div>

      </div>
      <div className='side-main'>
        {ticketcart && <TicketCart/>}
        {setting && <Setting/>}
        {about && <About/>}
        {contact && <Contact/>}
        
        

      </div>
    </div>
  )
}

export default Profile