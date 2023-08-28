import React from 'react';
import "../nav.css";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { useSelector , useDispatch } from 'react-redux';
import ControlledCarousel from "./Slider"
import RecommendMovies from './RecommendMovies';

function Home() {
  const {data, status, load} = useSelector((state)=>state.data)
  
  if (load){
    return (
      <div className='Home'>
        <div className='spinner-con'>
          <Spinner/> 
        </div>
  
      </div>
    )
  }else if(status){
    return (
      <div className='Home'>
        <div className='spinner-con'>
          
        </div>
  
      </div>
    )
  }else {
    return (
      <div className='Home'>
        <ControlledCarousel/>
        <RecommendMovies/>
        
  
      </div>
    )
  }
}

export default Home