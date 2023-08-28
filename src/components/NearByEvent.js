import React,{useEffect} from 'react';
import "../music.css";
import { useSelector , useDispatch } from 'react-redux';
import { musicData } from '../data/Reducer';
import { Link } from 'react-router-dom';
import { FindEventMusic } from '../data/Reducer';


function NearByEvent() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(musicData());
    },[])
    const {data,status,load} = useSelector((state)=>state.data.musicDataStore);
    
  return (
    <div className='nearbyevent--con'>
        <div className='title'>
            <h5>Music Shows in Chennai</h5>
        </div>
        <div className='music--con'>
            {
                data.map((value)=>{
                    return (
                        <div className='music--card' key={value.id}>
                            <div className='music--img'>
                                <img src={value.img}></img>
                            </div>
                            <div className='detail--con'>
                                <p>{value.title}</p>
                            </div>
                            <Link style={{textDecoration:"none",width:"100%",display:"flex",justifyContent:"center"}} to={`/${value.id}/EventBooking`}> <button onClick={()=>{
                                
                            }}>Booking Show</button></Link>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default NearByEvent