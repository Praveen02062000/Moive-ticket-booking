import React,{useState} from 'react';
import "../Ticket.css";
import { useDispatch, useSelector } from 'react-redux';
import { ticketset, AddTicket, RemoveTicket } from '../data/Reducer';
import { Link, Outlet } from 'react-router-dom';

function TicketBookingPage() {
    const [page,setpage] = useState("")
    const usedispatch = useDispatch()
    const ticketsData = useSelector((state)=>state.data.ticket);
    const {price,TicketCon} = useSelector((state)=>state.data.FinalTicket);
    const data = JSON.parse(window.localStorage.getItem("ticket"));
    
    function BookNow(){
        if (TicketCon.length === 0){
            return (
                <button onClick={()=>{
                    alert("Select the Seat !")
                }}>Book Now</button>
            )
        }else{
            return (
                <Link to={`/${data.Movie}/confrim/booking`}><button>Book Now</button></Link>

            )
        }

    }
    
    
    return (
            <div className='ticketbooking'>
                <div className='ticket--main'>
                    <div className='movie-detail'>
                        <div className='header--detail'></div>
                        <div className='main-movie'>
                            <img src={data.Img}></img>
                        </div>
                        <div className='detail'>
                            <h2>Movie : {data.Movie}</h2>
                            <p>Rated : {data.Rated}</p>
                            <div className='tic-price'>
                                <h5>Total Price : {price} ₹</h5>
                                <div className='tickets--con'>
                                    <h5>Ticket seats :</h5>
                                    <p>{TicketCon.map((ele)=>{
                                        return ele+" "
                                    })}</p>
                                </div>
                            </div>
                            <div className='btn--book'>
                                {<BookNow/>}
                                  
                            </div>
                        </div>
        
                    </div>
                    <div className='ticket--place'>
                        <div className='screen'>
                            <p>Screen View</p>
                            <div className='screen-screen'></div>
                        </div>
                        <div className='seats--con'>
                            <div className='left--seats'>
                                <div className='a-row'>
                                    <p>A</p>
                                    <div className='seats'>
                                    {ticketsData[0].booked_status ? <button onClick={(e)=>{
                                        usedispatch(ticketset(`A1`))
                                        usedispatch(RemoveTicket({seat:"A1"}))
                                        
                                    }} style={{backgroundColor:"lightgreen"}}>1</button> : <button onClick={(e)=>{
                                        usedispatch(ticketset(`A1`))
                                        usedispatch(AddTicket({seat:"A1",price:150}))
                                        
                                    }}style={{backgroundColor:"rgb(234, 234, 234)"}} >1</button>}
                                    {ticketsData[1].booked_status ? <button onClick={(e)=>{
                                        usedispatch(ticketset(`A2`))
                                        usedispatch(RemoveTicket({seat:"A2"}))
                                    }} style={{backgroundColor:"lightgreen"}}>2</button> : <button onClick={(e)=>{
                                        usedispatch(ticketset(`A2`))
                                        usedispatch(AddTicket({seat:"A2",price:150}))
                                    }}style={{backgroundColor:"rgb(234, 234, 234)"}} >2</button>}
                                    {ticketsData[2].booked_status ? <button onClick={(e)=>{
                                        usedispatch(ticketset(`A3`))
                                        usedispatch(RemoveTicket({seat:"A3"}))
                                    }} style={{backgroundColor:"lightgreen"}}>3</button> : <button onClick={(e)=>{
                                        usedispatch(ticketset(`A3`))
                                        usedispatch(AddTicket({seat:"A3",price:150}))
                                    }}style={{backgroundColor:"rgb(234, 234, 234)"}} >3</button>}
                                    {ticketsData[3].booked_status ? <button onClick={(e)=>{
                                        usedispatch(ticketset(`A4`))
                                        usedispatch(RemoveTicket({seat:"A4"}))
                                    }} style={{backgroundColor:"lightgreen"}}>4</button> : <button onClick={(e)=>{
                                        usedispatch(ticketset(`A4`))
                                        usedispatch(AddTicket({seat:"A4",price:150}))
                                    }}style={{backgroundColor:"rgb(234, 234, 234)"}} >4</button>}
                                   {ticketsData[4].booked_status ? <button onClick={(e)=>{
                                        usedispatch(ticketset(`A5`))
                                        usedispatch(RemoveTicket({seat:"A5"}))
                                    }} style={{backgroundColor:"lightgreen"}}>5</button> : <button onClick={(e)=>{
                                        usedispatch(ticketset(`A5`))
                                        usedispatch(AddTicket({seat:"A5",price:150}))
                                    }}style={{backgroundColor:"rgb(234, 234, 234)"}} >5</button>}
                                    
                                    </div>
                                </div>
                                <div className='a-row'>
                                    <p>B</p>
                                    <div className='seats'>
                                            {ticketsData[10].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B1`))
                                                usedispatch(RemoveTicket({seat:"B1"}))
                                            }} style={{backgroundColor:"lightgreen"}}>1</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B1`))
                                                usedispatch(AddTicket({seat:"B1",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >1</button>}
                                            {ticketsData[11].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B2`))
                                                usedispatch(RemoveTicket({seat:"B2"}))
                                            }} style={{backgroundColor:"lightgreen"}}>2</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B2`))
                                                usedispatch(AddTicket({seat:"B2",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >2</button>}
                                            {ticketsData[12].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B3`))
                                                usedispatch(RemoveTicket({seat:"B3"}))
                                            }} style={{backgroundColor:"lightgreen"}}>3</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B3`))
                                                usedispatch(AddTicket({seat:"B3",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >3</button>}
                                            {ticketsData[13].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B4`))
                                                usedispatch(RemoveTicket({seat:"B4"}))
                                            }} style={{backgroundColor:"lightgreen"}}>4</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B4`))
                                                usedispatch(AddTicket({seat:"B4",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >4</button>}
                                            {ticketsData[14].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B5`))
                                                usedispatch(RemoveTicket({seat:"B5"}))
                                            }} style={{backgroundColor:"lightgreen"}}>5</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B5`))
                                                usedispatch(AddTicket({seat:"B5",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >5</button>}
                                    </div>
                                </div>
                                <div className='a-row'>
                                    <p>C</p>
                                    <div className='seats'>
                                        {ticketsData[20].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`C1`))
                                                usedispatch(RemoveTicket({seat:"C1"}))
                                        }} style={{backgroundColor:"lightgreen"}}>1</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`C1`))
                                                usedispatch(AddTicket({seat:"C1",price:150}))
                                        }}style={{backgroundColor:"rgb(234, 234, 234)"}} >1</button>}
                                        {ticketsData[21].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`C2`))
                                                usedispatch(RemoveTicket({seat:"C2"}))
                                        }} style={{backgroundColor:"lightgreen"}}>2</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`C2`))
                                                usedispatch(AddTicket({seat:"C2",price:150}))
                                        }}style={{backgroundColor:"rgb(234, 234, 234)"}} >2</button>}
                                        {ticketsData[22].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`C3`))
                                                usedispatch(RemoveTicket({seat:"C3"}))
                                        }} style={{backgroundColor:"lightgreen"}}>3</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`C3`))
                                                usedispatch(AddTicket({seat:"C3",price:150}))
                                        }}style={{backgroundColor:"rgb(234, 234, 234)"}} >3</button>}
                                        {ticketsData[23].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`C4`))
                                                usedispatch(RemoveTicket({seat:"C4"}))
                                        }} style={{backgroundColor:"lightgreen"}}>4</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`C4`))
                                                usedispatch(AddTicket({seat:"C4",price:150}))
                                        }}style={{backgroundColor:"rgb(234, 234, 234)"}} >4</button>}
                                        {ticketsData[24].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`C5`))
                                                usedispatch(RemoveTicket({seat:"C5"}))
                                        }} style={{backgroundColor:"lightgreen"}}>5</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`C5`))
                                                usedispatch(AddTicket({seat:"C5",price:150}))
                                        }}style={{backgroundColor:"rgb(234, 234, 234)"}} >5</button>}
                                    </div>
                                </div>
                                <div className='a-row'>
                                    <p>D</p>
                                    <div className='seats'>
                                            {ticketsData[30].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D1`))
                                                    usedispatch(RemoveTicket({seat:"D1"}))
                                            }} style={{backgroundColor:"lightgreen"}}>1</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D1`))
                                                    usedispatch(AddTicket({seat:"D1",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >1</button>}
                                        {ticketsData[31].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D2`))
                                                    usedispatch(RemoveTicket({seat:"D2"}))
                                            }} style={{backgroundColor:"lightgreen"}}>2</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D2`))
                                                    usedispatch(AddTicket({seat:"D2",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >2</button>}
                                        {ticketsData[32].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D3`))
                                                    usedispatch(RemoveTicket({seat:"D3"}))
                                            }} style={{backgroundColor:"lightgreen"}}>3</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D3`))
                                                    usedispatch(AddTicket({seat:"D3",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >3</button>}
                                        {ticketsData[33].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D4`))
                                                    usedispatch(RemoveTicket({seat:"D4"}))
                                            }} style={{backgroundColor:"lightgreen"}}>4</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D4`))
                                                    usedispatch(AddTicket({seat:"D4",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >4</button>}
                                        {ticketsData[34].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D5`))
                                                    usedispatch(RemoveTicket({seat:"D5"}))
                                            }} style={{backgroundColor:"lightgreen"}}>5</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D5`))
                                                    usedispatch(AddTicket({seat:"D5",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >5</button>}
                                    </div>
                                </div>
                                <div className='a-row'>
                                    <p>E</p>
                                    <div className='seats'>
                                        {ticketsData[40].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E1`))
                                                    usedispatch(RemoveTicket({seat:"E1"}))
                                            }} style={{backgroundColor:"lightgreen"}}>1</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E1`))
                                                    usedispatch(AddTicket({seat:"E1",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >1</button>}
                                        {ticketsData[41].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E2`))
                                                    usedispatch(RemoveTicket({seat:"E2"}))
                                            }} style={{backgroundColor:"lightgreen"}}>2</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E2`))
                                                    usedispatch(AddTicket({seat:"E2",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >2</button>}
                                        {ticketsData[42].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E3`))
                                                    usedispatch(RemoveTicket({seat:"E3"}))
                                            }} style={{backgroundColor:"lightgreen"}}>3</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E3`))
                                                    usedispatch(AddTicket({seat:"E3",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >3</button>}
                                        {ticketsData[43].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E4`))
                                                    usedispatch(RemoveTicket({seat:"E4"}))
                                            }} style={{backgroundColor:"lightgreen"}}>4</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E4`))
                                                    usedispatch(AddTicket({seat:"E4",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >4</button>}
                                        {ticketsData[44].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E5`))
                                                    usedispatch(RemoveTicket({seat:"E5"}))
                                            }} style={{backgroundColor:"lightgreen"}}>5</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E5`))
                                                    usedispatch(AddTicket({seat:"E5",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >5</button>}
                                    </div>
                                </div>
                            </div>
                            <div className='right--seats'>
                                <div className='a-row'>
                                        <p>A</p>
                                        <div className='seats'>
                                                {ticketsData[5].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`A6`))
                                                usedispatch(RemoveTicket({seat:"A6"}))
                                                }} style={{backgroundColor:"lightgreen"}}>6</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`A6`))
                                                    usedispatch(AddTicket({seat:"A6",price:150}))
                                                }}style={{backgroundColor:"rgb(234, 234, 234)"}} >6</button>}
                                            {ticketsData[6].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`A7`))
                                                usedispatch(RemoveTicket({seat:"A7"}))
                                            }} style={{backgroundColor:"lightgreen"}}>7</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`A7`))
                                                usedispatch(AddTicket({seat:"A7",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >7</button>}
                                            {ticketsData[7].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`A8`))
                                                usedispatch(RemoveTicket({seat:"A8"}))
                                            }} style={{backgroundColor:"lightgreen"}}>8</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`A8`))
                                                usedispatch(AddTicket({seat:"A8",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >8</button>}
                                            {ticketsData[8].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`A9`))
                                                usedispatch(RemoveTicket({seat:"A9"}))
                                            }} style={{backgroundColor:"lightgreen"}}>9</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`A9`))
                                                usedispatch(AddTicket({seat:"A9",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >9</button>}
                                            {ticketsData[9].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`A10`))
                                                usedispatch(RemoveTicket({seat:"A10"}))
                                            }} style={{backgroundColor:"lightgreen"}}>10</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`A10`))
                                                usedispatch(AddTicket({seat:"A10",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >10</button>}
                                        </div>
                                    </div>
                                    <div className='a-row'>
                                        <p>B</p>
                                        <div className='seats'>
                                            {ticketsData[15].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B6`))
                                                usedispatch(RemoveTicket({seat:"B6"}))
                                            }} style={{backgroundColor:"lightgreen"}}>6</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B6`))
                                                usedispatch(AddTicket({seat:"B6",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >6</button>}
                                            {ticketsData[16].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B7`))
                                                usedispatch(RemoveTicket({seat:"B7"}))
                                            }} style={{backgroundColor:"lightgreen"}}>7</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B7`))
                                                usedispatch(AddTicket({seat:"B7",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >7</button>}
                                            {ticketsData[17].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B8`))
                                                usedispatch(RemoveTicket({seat:"B8"}))
                                            }} style={{backgroundColor:"lightgreen"}}>8</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B8`))
                                                usedispatch(AddTicket({seat:"B8",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >8</button>}
                                            {ticketsData[18].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B9`))
                                                usedispatch(RemoveTicket({seat:"B9"}))
                                            }} style={{backgroundColor:"lightgreen"}}>9</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B9`))
                                                usedispatch(AddTicket({seat:"B9",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >9</button>}
                                            {ticketsData[19].booked_status ? <button onClick={(e)=>{
                                                usedispatch(ticketset(`B10`))
                                                usedispatch(RemoveTicket({seat:"B10"}))
                                            }} style={{backgroundColor:"lightgreen"}}>10</button> : <button onClick={(e)=>{
                                                usedispatch(ticketset(`B10`))
                                                usedispatch(AddTicket({seat:"B10",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >10</button>}
                                        </div>
                                    </div>
                                    <div className='a-row'>
                                        <p>C</p>
                                        <div className='seats'>
                                            {ticketsData[25].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C6`))
                                                    usedispatch(RemoveTicket({seat:"C6"}))
                                            }} style={{backgroundColor:"lightgreen"}}>6</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C6`))
                                                    usedispatch(AddTicket({seat:"C6",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >6</button>}
                                            {ticketsData[26].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C7`))
                                                    usedispatch(RemoveTicket({seat:"C7"}))
                                            }} style={{backgroundColor:"lightgreen"}}>7</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C7`))
                                                    usedispatch(AddTicket({seat:"C7",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >7</button>}
                                            {ticketsData[27].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C8`))
                                                    usedispatch(RemoveTicket({seat:"C8"}))
                                            }} style={{backgroundColor:"lightgreen"}}>8</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C8`))
                                                    usedispatch(AddTicket({seat:"C8",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >8</button>}
                                            {ticketsData[28].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C9`))
                                                    usedispatch(RemoveTicket({seat:"C9"}))
                                            }} style={{backgroundColor:"lightgreen"}}>9</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C9`))
                                                    usedispatch(AddTicket({seat:"C9",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >9</button>}
                                            {ticketsData[29].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C10`))
                                                    usedispatch(RemoveTicket({seat:"C10"}))
                                            }} style={{backgroundColor:"lightgreen"}}>10</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`C10`))
                                                    usedispatch(AddTicket({seat:"C10",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >10</button>}
                                        </div>
                                    </div>
                                    <div className='a-row'>
                                        <p>D</p>
                                        <div className='seats'>
                                            {ticketsData[35].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D6`))
                                                    usedispatch(RemoveTicket({seat:"D6"}))
                                            }} style={{backgroundColor:"lightgreen"}}>6</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D6`))
                                                    usedispatch(AddTicket({seat:"D6",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >6</button>}
                                            {ticketsData[36].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D7`))
                                                    usedispatch(RemoveTicket({seat:"D7"}))
                                            }} style={{backgroundColor:"lightgreen"}}>7</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D7`))
                                                    usedispatch(AddTicket({seat:"D7",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >7</button>}
                                            {ticketsData[37].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D8`))
                                                    usedispatch(RemoveTicket({seat:"D8"}))
                                            }} style={{backgroundColor:"lightgreen"}}>8</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D8`))
                                                    usedispatch(AddTicket({seat:"D8",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >8</button>}
                                            {ticketsData[38].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D9`))
                                                    usedispatch(RemoveTicket({seat:"D9"}))
                                            }} style={{backgroundColor:"lightgreen"}}>9</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D9`))
                                                    usedispatch(AddTicket({seat:"D9",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >9</button>}
                                            {ticketsData[39].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D10`))
                                                    usedispatch(RemoveTicket({seat:"D10"}))
                                            }} style={{backgroundColor:"lightgreen"}}>10</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`D10`))
                                                    usedispatch(AddTicket({seat:"D10",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >10</button>}
                                        </div>
                                    </div>
                                    <div className='a-row'>
                                        <p>E</p>
                                        <div className='seats'>
                                            {ticketsData[45].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E6`))
                                                    usedispatch(RemoveTicket({seat:"E6"}))
                                            }} style={{backgroundColor:"lightgreen"}}>6</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E6`))
                                                    usedispatch(AddTicket({seat:"E6",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >6</button>}
                                            {ticketsData[46].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E7`))
                                                    usedispatch(RemoveTicket({seat:"E7"}))
                                            }} style={{backgroundColor:"lightgreen"}}>7</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E7`))
                                                    usedispatch(AddTicket({seat:"E6",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >7</button>}
                                            {ticketsData[47].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E8`))
                                                    usedispatch(RemoveTicket({seat:"E8"}))
                                            }} style={{backgroundColor:"lightgreen"}}>8</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E8`))
                                                    usedispatch(AddTicket({seat:"E8",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >8</button>}
                                            {ticketsData[48].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E9`))
                                                    usedispatch(RemoveTicket({seat:"E9"}))
                                            }} style={{backgroundColor:"lightgreen"}}>9</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E9`))
                                                    usedispatch(AddTicket({seat:"E9",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >9</button>}
                                            {ticketsData[49].booked_status ? <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E10`))
                                                    usedispatch(RemoveTicket({seat:"E10"}))
                                            }} style={{backgroundColor:"lightgreen"}}>10</button> : <button onClick={(e)=>{
                                                    usedispatch(ticketset(`E10`))
                                                    usedispatch(AddTicket({seat:"E10",price:150}))
                                            }}style={{backgroundColor:"rgb(234, 234, 234)"}} >10</button>}
                                        </div>
                                    </div>
                                </div>
        
                        </div>
                    </div>
                    
        
                </div>
            </div>
      )
    
}

export default TicketBookingPage