import React,{useState} from 'react';
import "../App.css";
import search_logo from "../assets/search.png"
import { Link, Outlet } from 'react-router-dom';
import profile from  "../assets/New folder/profile.png"
import { useSelector } from 'react-redux';


function Header() {
   const data = useSelector((state)=>state.data.cart) 
    
  return (
    <div className='head' >
        <div className='logo--con'>
                <div>
                  <Link to="/" style={{color:"white"}} ><h3>LC <span style={{color:"red"}}>moviesbooking</span></h3></Link>
                  <Outlet/>
                </div>

        </div>
        <div className='search--con'>
            <input type='text' placeholder='Search'></input>
            <div className='search--btn--con'>
                <button>Search</button>
                <img src={search_logo}></img>
            </div>
            
        </div>

        <div className='acc--con'>
            <div className='acc'>
              <Link to="/profile"><img src={profile}></img></Link>
              <p style={{color:"white"}}>{data.length}</p>
            </div>
        </div>
    </div>
  )
}

export default Header