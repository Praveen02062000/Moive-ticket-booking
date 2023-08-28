import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import "../nav.css";

const style = {
  color:"black",
  textDecoration:"none",
  
}


function SubHead() {
  return (
    <div className='subhead'>
        <nav>
            <ul>
                <li><Link to="/" style={style}>Home</Link></li>
                <li>
                  <Link  to="/LatestMovies" style={style}>Latest Movies</Link>
                </li>
                <li>
                  <Link to="/upcomingMovies/" style={style}>Upcoming movies</Link>
                </li>
                <li>
                  <Link to="/NearByEvent" style={style}>Nearby Events</Link>
                </li>
                <Outlet/>
            </ul>
        </nav>
    </div>
  )
}

export default SubHead