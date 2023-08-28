import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link , Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import like from "../assets/New folder/like.png";
import "../Single.css";
import "../nav.css";

function SinglePage() {
    const [load,setload] = useState(false);
    let values = window.localStorage.getItem("page");
    let con = JSON.parse(values);

    function SentDataBooking(){
        const obj = 
        {
            Movie:con.Title,
            Img:con.Poster,
            Rated:con.Rated,
            Price:150
        }
        let data = JSON.stringify(obj);
        window.localStorage.setItem("ticket",data);
        console.log("done")
    }


    useEffect(()=>{
        setTimeout(()=>{
            setload(true);
        },200)
    },[])

    if(!load){
        return (
            <div className='spinner-con'>
                <Spinner/>
            </div>
        )
    }else{
        return (
            <div className='singlepage'>
                <div className='single--main--con' style={{backgroundImage:`url(${con.Images[0]})`,backgroundSize:"cover"}}>
                    <div className='mini--con'>
                        <div className='mini--con--banner'>
                            <div className='img--cons'>
                                <img src={con.Poster}></img>
    
                            </div>
                            <div className='main--con--side'>
                                <div className='head--con'>
                                    <h2>{con.Title}</h2>
                                </div>
                                <div className='like--con'>
                                    <img src = {like}/><p>{con.imdbVotes}</p>
                                </div>
                                <div className='lang'>
                                    <p>{con.Language}</p>
                                    <p>{con.Country}</p>

                                </div>
                                <div className='mini--content'>
                                    <p>{con.Runtime} .</p>
                                    <p>{con.Genre } .</p>
                                    <p>{con.Rated } .</p>
                                    <p>{con.Released }</p>
                                    <p></p>
                                </div>
                                <div className='btn--booking'>
                                    <Link to={`/${con.Title}/Booking`}><button onClick={
                                        ()=>{
                                            SentDataBooking();
                                        }
                                        }>Book Now</button></Link>
                                    <Outlet/>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cast-and-crew'>
                    <div className='containers'>
                        <div className='about--con'>
                            <h1>About</h1>
                           
                            <p>{con.Plot}</p>
                        </div>
                        <hr/>
                        <div className='cast--list'>
                            <h1>Cast</h1>
                            <div className='lists'>
                                <ul>
                                    {
                                    con.Actors.split(",").map((element)=>{
                                        
                                        return (
                                            <li>{element}</li>
                                        )
                                    })}

                                </ul>

                            </div>
                        </div>
                        <hr/>
                        <div className='crew--list'>
                            <h1>
                                Crew
                            </h1>
                            <div className='lists'>
                                <h4>Director :</h4>
                                <br></br>
                                <p>{con.Director}</p> 
                                <h4>Writers : </h4>
                                <br></br>
                                <p>{con.Writer}</p> 
                            </div>
                        </div>
                        

                    </div>

                </div>
                <div className='image--con'>
                    <h1>Movies Shots</h1>
                    <div className='con--img'>
                        {
                            con.Images.map((ele)=>{
                                return (
                                    <img src={ele}></img>
                                )
                            })
                        }
                    </div>
                </div>
    
            </div>
        )

    }
    
    

        
    
   
}

export default SinglePage