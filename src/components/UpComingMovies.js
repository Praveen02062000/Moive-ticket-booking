import React from "react";
import "../Upcoming.css";
import "../nav.css"




function UpComingMovies() {
  const data = JSON.parse(window.localStorage.getItem("upcoming"));
  console.log(data)
  
  
  return (
    <div className='recommend--con '  id="upcoming">
      <div className="head-upcoming">
        <h2 style={{color:"white",fontSize:"16px",textAlign:"center"}}>Upcoming Movies </h2>

      </div>
      <div className="movies--con">
        {data.map((value)=>{
          return (
            <div className="movies-card" key={value.imdbID}>
                                <div className="img--con">
                                    <img src={value.Poster} ></img>
                                </div>
                                <div className="title--movies">
                                    <div className="sub--con1">
                                        <h4>{value.Title}</h4>
                                        
                                    </div>
                                    <div className="sub--con2">
                                        <p>Rated : {value.Rated}</p>
                                        <p>imdbRating : {value.imdbRating}</p>
                                        <p>imdbVotes : {value.imdbVotes}</p>
                                    </div>
                                    <button onClick={()=>{
                                      alert("ComingSoon Dude")
                                    }} style={{backgroundColor:"pink",borderStyle:"none",height:"40px",width:"90%",fontWeight:"700",borderRadius:"10px"}}>ComingSoon</button>
                                </div>
                                
                                
            </div>
          )
        })}
      </div>
      
    </div>
  )
}

export default UpComingMovies