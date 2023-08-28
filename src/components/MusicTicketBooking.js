import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FindEventMusic } from '../data/Reducer';
import { Link } from 'react-router-dom';
import "../music.css";

function MusicTicketBooking() {
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(FindEventMusic(id))
    },[])
    const data = JSON.parse(window.localStorage.getItem("music"))[0];
  return (
    <div className='musicticket--con'>
        <div className='music--head'>
            <img src={data.banner}></img>
        </div>
        <div className='detail--music'>
            <div className='first--con'>
                <h3>{data.title}</h3>
                <div className='small--detail'><h6>{data.catory}</h6>
                <p>Place : {data.place}</p></div>
            </div>
            <div className='second--con'>
                <Link to={`/${data.title}/finalbooking/ticket`} style={{textDecoration:"none"}}><button>BookNow</button></Link>
            </div>
        </div>
        <hr/>
        <div className='cast'>
            <div className='cast--div'>
                <h5 style={{marginBottom:"2rem"}}>Musicians</h5>
                <div>
                    {
                        data.Musicians.map((value)=>{
                            return (
                                <div key={value.id} className='music'>
                                    <img src={value.img} title={value.name}></img>
                                    <h5>{value.name}</h5>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    </div>
  )
}

export default MusicTicketBooking