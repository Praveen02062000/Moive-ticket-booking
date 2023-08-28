import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { singlepage } from "../data/Reducer";

export default function RecommendMovies(){
    const {data} = useSelector((state)=>state.data.main)
    const dispatch = useDispatch()
    return (
        <div className="recommend--con">
            <div className="title-name">
                <h3>Recommended Movies</h3>
            </div>
            <div className="movies--con">
                {
                    data.map((value)=>{
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
                                </div>
                                <Link to={`/${value.imdbID}`} style={{width:"100%",display:"flex",textDecoration:"none",justifyContent:"center"}}><button className="btn--show" onClick={()=>dispatch(singlepage(value.imdbID))}>BookTheShow</button></Link>

                            </div>
                        )
                    })
                }
                

            </div>

        </div>
    )
} 