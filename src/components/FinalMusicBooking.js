import React,{useEffect, useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { MusicTicketprice } from '../data/Reducer';
import { TicketCart } from '../data/Reducer';
import { Link } from 'react-router-dom';

function FinalMusicBooking() {
    const data = JSON.parse(window.localStorage.getItem('music'))[0];
    const [back, setBack] = useState('#FFFFFF');
    const [fore, setFore] = useState('#000000');
    const [size, setSize] = useState(150);
    const [ticketdata,setticketdata] = useState("");
    const dispatch = useDispatch();
    const priceData = useSelector((state)=>state.data.musicTicket);
    
    function TotalPrices(){
        return priceData.general.price + priceData.silver.price+priceData.gold.price
    }
    
    function TicketReturn(l){
        let word = "";
        l.map((ele)=>{
            word = word + ele
        })
        return word
    }

    function CheckTicket(){
        if (priceData.general.count === 0 && priceData.silver.count === 0 && priceData.gold.count===0){
            return (
                <button onClick={()=>{
                    alert("Select The Ticket")
                }}>Confirm</button>
            )
        }else {
            return (
                <Link to="/"><button onClick={()=>{
                    let con = [`GEN-${priceData.general.count}`,`SIL-${priceData.silver.count}`,`GLD-${priceData.gold.count}`]
                    setticketdata(TicketReturn(con))
                    let data_obj = {
                        id:new Date().getTime(),
                        movie:data.title,
                        img:data.img,
                        price:priceData.general.price+priceData.silver.price+priceData.gold.price,
                        tickets:con,
                        qrCodeData:{
                            title:data.title,
                            value:ticketdata,
                            bgColor:back,
                            fgColor:fore,
                            size:size
                        }
    
                    }
                    dispatch(TicketCart(data_obj));
                    alert("Your Ticket Confirmed");
                    dispatch(MusicTicketprice("refresh"));
                }}>Confirm</button></Link>

            )
        }
    }

    
  return (
    <div className='final--music--con'>
        <div className='ticket--price'>
            <div className='con-1'>
                
                <div className='con-1-1'>
                    <div className='con-detail'>
                        <h3>GENERAL ACCESS</h3>
                        <p>price : {priceData.general.price}</p>
                        <p>details</p>
                    </div>
                    <div className='btn--con'>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("General-dec"));
                        }}>-</button>
                        <h3>{priceData.general.count}</h3>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("General-inc"));
                        }}>+</button>
                    </div>
                </div>
                <ul>
                <li>Each ticket grants entry for one person to the event</li>   
                <li>This is a Standing Zone</li>
                </ul>
            </div>
            <hr/>
            <div className='con-2'>
          
                <div className='con-1-1'>
                    <div  className='con-detail'>
                        <h3>SILVER TICKETS</h3>
                        <p>price : {priceData.silver.price}</p>
                        <p>details</p>
                    </div>
                    <div className='btn--con'>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("Silver-dec"));
                        }}>-</button>
                        <h3>{priceData.silver.count}</h3>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("Silver-inc"));
                        }}>+</button>
                    </div>
                </div>
                <ul>
                <li>Each ticket grants entry for one person to the event</li>   
                <li>This is Seating Zone, Seating is on a first come first serve basis</li>
                </ul>
            </div>
            <hr/>
            <div className='con-3'>
           
                <div className='con-1-1'>
                    <div  className='con-detail'>
                        <h3>GOLD TICKETS</h3>
                        <p>price : {priceData.gold.price}</p>
                        <p>details</p>
                    </div>
                    <div className='btn--con'>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("Gold-dec"));
                        }}>-</button>
                        <h3>{priceData.gold.count}</h3>
                        <button onClick={()=>{
                            dispatch(MusicTicketprice("Gold-inc"));
                        }}>+</button>
                    </div>
                </div>
                <ul>
                <li>Each ticket grants entry for one person to the event</li>   
                <li>This is Seating Zone, Seating is on a first come first serve basis</li>
                </ul>
            </div>
        </div>
        <div className='total--con'>
            <div>
                <h6 style={{textAlign:"center"}}>{data.title}</h6>
                <hr></hr>
            </div>
            <div>
                <ul>
                    <li>General Ticket Count : {priceData.general.count} </li>
                    <li>General Ticket price : {priceData.general.price}</li>
                </ul>
                <hr/>
                <ul>
                    <li>Silver Ticket Count : {priceData.silver.count} </li>
                    <li>Silver Ticket price : {priceData.silver.price}</li>
                </ul>
                <hr/>
                <ul>
                    <li>Gold Ticket Count : {priceData.gold.count} </li>
                    <li>Gold Ticket price : {priceData.gold.price}</li>
                </ul>
                <hr/>
                
            </div>
            <div className='total--price--con'>
                <h5 style={{textAlign:"center"}}>TotalPrice : {TotalPrices()}</h5>
            </div>
            {<CheckTicket/>}
            
        </div>
    </div>
  )
}

export default FinalMusicBooking