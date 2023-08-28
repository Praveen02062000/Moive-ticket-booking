import React,{useEffect , useState} from "react";
import { useDispatch , useSelector } from "react-redux";
import { fetchMovies } from "./data/Reducer";
import Header from "./components/Header";
import SubHead from "./components/SubHead";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LatestMovies from "./components/LatestMovies";
import Footer from "./components/Footer";
import SinglePage from "./components/SinglePage";
import TicketBookingPage from "./components/TicketBookingPage";
import FinalTicket from "./components/FinalTicket";
import UpComingMovies from "./components/UpComingMovies";
import Profile from "./components/Profile"
import { UpcomingData } from "./data/Reducer";
import NearByEvent from "./components/NearByEvent";
import MusicTicketBooking from "./components/MusicTicketBooking";
import FinalMusicBooking from "./components/FinalMusicBooking";


function App() {
  const {data, status, load} = useSelector((state)=>state.data)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchMovies())
    dispatch(UpcomingData())
   
  },[])
  
  return (
    <div className="App">
      <Header/>
      <SubHead/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/LatestMovies" element={<LatestMovies/>}/>
        <Route exact path="/:id" element={<SinglePage/>}/>
        <Route exact path="/:movie/Booking" element={<TicketBookingPage/>}/>
        <Route exact path="/:movie/confrim/booking" element={<FinalTicket/>}/>
        <Route exact path="/upcomingMovies/" element={<UpComingMovies/>}/>
        <Route exact path="/profile" element={<Profile/>}/>
        <Route exact path="/NearbyEvent" element={<NearByEvent/>}/>
        <Route exact path="/:id/EventBooking" element={<MusicTicketBooking/>}/>
        <Route exact path="/:event/finalbooking/ticket" element={<FinalMusicBooking/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
