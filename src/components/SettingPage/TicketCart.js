import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import QRCode from 'react-qr-code';


function TicketCart() {
    const [date,setdate]=useState()
    const data = useSelector((state)=>state.data.cart);
    console.log(data)
    function DateSet(){
        let date = new Date();
        return `${date.getDate()}/ ${(date.getMonth()) + 1} /${date.getFullYear()}`;
    }
    useEffect(()=>{
        setdate(DateSet)
    })
  return (
    <div className='ticket--cart'>
        <div className='cart--head'>

        </div>
        <div className='cart--main'>
            {
                data.map((value)=>{
                    return (
                        <div key={value.id} className='cartItem'>
                            <div className='cart--img--con'>
                                <img src={value.img}></img>
                            </div>
                            <div className='cart-movies-detail'>
                                <div>
                                    <h5>Movie Title : {value.movie}</h5>
                                    <p>Price : {value.price}</p>
                                </div>
                                <div className='tickets-details'>
                                    <h5>Ticket Seat No : </h5>
                                    <p>{value.tickets.map((ele)=>{
                                        return ele + " "
                                    })}</p>
                                    <p>Date : {date}</p>
                                    <p>Show Time : 11:30pm</p>     
                                </div>
                            </div>
                            <div className='qrcart'>
                                <QRCode
                                    title={value.qrCodeData.title}
                                    value={value.qrCodeData.value}
                                    bgColor={value.qrCodeData.bgColor}
                                    fgColor={value.qrCodeData.fgColor}
                                    size={value.qrCodeData.size}
                                 
                                 />

                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default TicketCart