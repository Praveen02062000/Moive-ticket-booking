import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ticketCon } from "./Ticketsdata";
import { act } from "@testing-library/react";


const url = "http://localhost:3001/data" ;
const musicurl = "http://localhost:3002/events";
const CityUrl = "https://gist.githubusercontent.com/anubhavshrimal/4aeb195a743d0cdd1c3806c9c222ed45/raw/181a34db4fcb8b37533b7c8b9c489b6c01573158/Indian_Cities_In_States_JSON"

export const CityFetch=createAsyncThunk('City/data/fetch',async()=>{
    let cityData = axios.get(CityUrl).then((res)=>{
        return res.data;
    });
    return cityData;
})

export const  StatesCon = createAsyncThunk("city",async ()=>{
    let statedata = await fetch(CityUrl).then((res)=>res.json());
    let convert = Object.keys(statedata);
    return convert
})

export const  musicData = createAsyncThunk("music/data",async ()=>{
    const musicdata = await fetch(musicurl).then((res)=>res.json())
    return musicdata
}) 

export const fetchMovies = createAsyncThunk('fetchdata/data', async ()=>{
    let values = axios.get(url).then(res =>{
        return res.data
    })
    return values
})

export const singlepage = createAsyncThunk('single/page',async (id)=>{
    let values =await axios.get(url).then((res)=>{
        return res.data
    })
    const con = values.filter((val)=>{
        try{
            if (val.imdbID === id){
                const obj = JSON.stringify(val)
                window.localStorage.setItem("page",obj)
                return val
            }
        }catch(err){
            console.log("error in single page action function")
        }
    })
    return con

})

export const UpcomingData = createAsyncThunk("upcoming/data",async ()=>{
    let datas =await axios.get(url).then((res)=>{
        return res.data
    })
    
    try{
        const values = datas.filter((element)=>{
            return element.ComingSoon === true;
        })
        let obj = JSON.stringify(values);
        window.localStorage.setItem("upcoming",obj)
        
        return values


    }catch(err){
        console.log("error in upcoming data fetching !")
    }

})

export const FindEventMusic = createAsyncThunk("musics/data", async (id)=>{
    const data = await fetch(musicurl).then((res)=>res.json());
    console.log(data)
    const setData = data.filter((ele)=>{
        return ele.id === id;
    })
    let obj = JSON.stringify(setData);
    window.localStorage.setItem("music",obj)

    return setData
})



const inital = {
    main:{
        data:[],
        status:false,
        load:false
    },
    single:{
        data:[],
        status:false,
        load:false
    },
    ticket:ticketCon,
    FinalTicket:{
        price:0,
        TicketCon:[]
    },Upcoming:{
        data:[]
    },
    cart:[],
    City:{
        data:[],
        status:false,
        load:false
    }
    ,States:{
        data:[],
        status:false,
        load:false
    },musicDataStore:{
        data:[],
        status:false,
        load:false
    },musicSingle:{
        data:[],
        status:false,
        load:false
    },musicTicket:{
        general:{
            price:0,
            count:0
        },
        silver:{
            price:0,
            count:0
        },
        gold:{
            price:0,
            count:0
        }
    }
    
}


const Reducer = createSlice({
    name:"data",
    initialState:inital,
    reducers:{
        ticketset:(state,action)=>{
            let finded = state.ticket.find((element)=>{
                return element.id === action.payload
            })
            if(finded){
               const new_con =  state.ticket.map((element)=>{
                    if (element.id === action.payload){
                        if (!element.booked_status){
                            return {...element,booked_status:true}
                        }else{
                            return {...element,booked_status:false}
                        }
                    }else {
                        return element
                    }
                })
                return {...state,ticket:new_con};
            }
           
            // state.ticket.map((ele)=>{
            //     if (action.type === ele.id){
            //         if (!ele.booked_status){
                       
            //         }
            //     }
            // })

        },
        AddTicket:(state,action)=>{
            return {...state,FinalTicket:{price:state.FinalTicket.price + action.payload.price,TicketCon:[...state.FinalTicket.TicketCon,action.payload.seat]}}
        },
        RemoveTicket:(state,action)=>{
            let find = state.FinalTicket.TicketCon.filter((element)=>{
                return element !== action.payload.seat
            })
            return {...state,FinalTicket:{price:150 * find.length,TicketCon:find}}
            
        }
        ,TicketCart:(state,action)=>{
            return {...state,cart:[...state.cart,action.payload],FinalTicket:{price:0,TicketCon:[]}};
           
        },
        RefreshTicket:(state)=>{
             return {...state,ticket:ticketCon};
        },
        MusicTicketprice:(state,action)=>{
            let price = {
                general:500,
                silver:1000,
                gold:2000
            }
            switch(action.payload){
                case "General-inc":
                    return {...state,musicTicket:{...state.musicTicket,general:{price:state.musicTicket.general.price + price.general,count:state.musicTicket.general.count + 1}}}
                case "General-dec":
                    if (state.musicTicket.general.price === 0){
                        return {...state,musicTicket:{...state.musicTicket,general:{price:0,count:0}}}

                    }else {
                        return {...state,musicTicket:{...state.musicTicket,general:{price:state.musicTicket.general.price - price.general,count:state.musicTicket.general.count - 1}}}

                    }
                case "Silver-inc":
                    return {...state,musicTicket:{...state.musicTicket,silver:{price:state.musicTicket.silver.price + price.silver,count:state.musicTicket.silver.count + 1}}}



                case "Silver-dec":
                    if (state.musicTicket.silver.price === 0){
                        return {...state,musicTicket:{...state.musicTicket,silver:{price:0,count:0}}}

                    }else {
                        return {...state,musicTicket:{...state.musicTicket,silver:{price:state.musicTicket.silver.price - price.silver,count:state.musicTicket.silver.count - 1}}}

                    }
                case "Gold-inc":
                    return {...state,musicTicket:{...state.musicTicket,gold:{price:state.musicTicket.gold.price + price.gold,count:state.musicTicket.gold.count + 1}}}



                case "Gold-dec":
                    if (state.musicTicket.gold.price === 0){
                        return {...state,musicTicket:{...state.musicTicket,gold:{price:0,count:0}}}

                    }else {
                        return {...state,musicTicket:{...state.musicTicket,gold:{price:state.musicTicket.gold.price - price.gold,count:state.musicTicket.gold.count - 1}}}

                    }

                case "refresh":
                    return {...state,musicTicket:{general:{price:0,count:0},silver:{price:0,count:0},gold:{price:0,count:0}}}
            }
        }
        
        


    },
    extraReducers : {
        [fetchMovies.pending] : (state) => {
            state.main.load = false
        },
        [fetchMovies.fulfilled] : (state,action) =>{
            
            state.main.load = true;
            state.main.data = action.payload
        },
        [fetchMovies.rejected] : (state) =>{
            state.main.load = true;
            state.main.status = true
        },

        [singlepage.pending]:(state)=>{
            state.single.load = true;

        },
        [singlepage.fulfilled]:(state,action)=>{
            state.single.data = action.payload;
            state.single.load = false;
        },
        [singlepage.rejected]:(state)=>{
            state.single.load = false;
            state.single.status = true;
        },
        [UpcomingData.pending]:(state)=>{
            state.Upcoming.load = true;
        },
        [UpcomingData.fulfilled]:(state,action)=>{
            state.Upcoming.load = false;
            state.Upcoming.data = action.payload
        },[UpcomingData.rejected]:(state)=>{
            state.Upcoming.load = false;
            state.Upcoming.status = true;
        },[CityFetch.pending]:(state)=>{
            state.City.load = true;

        },[CityFetch.fulfilled]:(state,action)=>{
            state.City.load = false;
            state.City.data = action.payload
        },[CityFetch.rejected]:(state)=>{
            state.City.load = false;
            state.City.status = true;
        },[StatesCon.pending]:(state)=>{
            state.States.load = true;
        },[StatesCon.fulfilled]:(state,action)=>{
            state.States.load = false;
            state.States.data = action.payload
        },[StatesCon.rejected]:(state)=>{
            state.States.load = false;
            state.States.status = true;
        }
        ,[musicData.pending]:(state)=>{
            state.musicDataStore.load = true;
        },[musicData.fulfilled]:(state,action)=>{
            state.musicDataStore.load = false;
            state.musicDataStore.data = action.payload
        },[musicData.rejected]:(state)=>{
            state.musicDataStore.load = false;
            state.musicDataStore.status = true;
        },[FindEventMusic.pending]:(state)=>{
            state.musicSingle.load = true;
        },[FindEventMusic.fulfilled]:(state,action)=>{
            state.musicSingle.load = false;
            state.musicSingle.data = action.payload
        },[FindEventMusic.rejected]:(state)=>{
            state.musicSingle.load = false;
            state.musicSingle.status = true;
        }
    }
    
})


export const  { ticketset, AddTicket, RemoveTicket,TicketCart,RefreshTicket,MusicTicketprice} = Reducer.actions;

export default Reducer.reducer