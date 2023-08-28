import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import { useDispatch } from 'react-redux';
import { TicketCart, RefreshTicket } from '../data/Reducer';
import { Link } from 'react-router-dom';
import "../App.css";

function FinalTicket() {
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(150);
    const [ticketdata,setticketdata] = useState("");
    const [date,setdate] = useState();
    const Moviedata = JSON.parse(window.localStorage.getItem("ticket"));
    const TicketData = useSelector((state)=>state.data.FinalTicket)
    const dispatch = useDispatch()

    console.log(TicketData)
    function TicketReturn(){
        let word = "";
        TicketData.TicketCon.map((ele)=>{
            word = word + ele
        })
        return word
    }
    function DateSet(){
        let date = new Date();
        return `${date.getDate()}/ ${(date.getMonth()) + 1} /${date.getFullYear()}`;
    }
    useEffect(()=>{
        
        setticketdata(TicketReturn)
        setdate(DateSet)

    },[])

    return (
        <div className='finalticket'>
            <div className='final-con'>
                <div className='movies--detail--con'>
                    <div className='img--movie--con'>
                        <img src={Moviedata.Img}></img>
                    </div>
                    
                </div>
                <div className='movie-ticket-detail'>
                    <h5>Movie Title : {Moviedata.Movie}</h5>
                        <p>Price : {TicketData.price}</p>
                        <div>
                            <h5>Ticket Seat No : </h5>
                            <p>{TicketData.TicketCon.map((ele)=>{
                                return ele + " "
                            })}</p>
                            <p>Date : {date}</p>
                            <p>Show Time : 11:30pm</p>
                            
                        </div>
                </div>
                
                <div className='qr--code'>
                    <QRCode
                            title={Moviedata.Movie}
                            value={ticketdata}
                            bgColor={back}
                            fgColor={fore}
                            size={size === '' ? 0 : size}
                    />
                </div>
                
            </div>
            <div style={{margin:"0px auto"}}><Link to="/"><button className='btn--confrim' onClick={()=>{
                let data_obj = {
                    id:new Date().getTime(),
                    movie:Moviedata.Movie,
                    img:Moviedata.Img,
                    price:TicketData.price,
                    tickets:TicketData.TicketCon,
                    qrCodeData:{
                        title:Moviedata.Movie,
                        value:ticketdata,
                        bgColor:back,
                        fgColor:fore,
                        size:size
                    }

                }
                dispatch(TicketCart(data_obj))
                alert("Your Ticket Confirmed")
                dispatch(RefreshTicket())
            }}>Confirm Movie</button></Link></div>
        </div>
    )
}

export default FinalTicket