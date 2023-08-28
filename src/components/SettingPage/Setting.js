import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CityFetch } from '../../data/Reducer';
import { StatesCon } from '../../data/Reducer';

function Setting() {
  const dispatch = useDispatch();
  const {data,status,load} = useSelector((state)=>state.data.City);
  const {citydata,citystatus,cityload} = useSelector((state)=>state.data.States);
  useEffect(()=>{
    dispatch(CityFetch())
    dispatch(StatesCon())
  },[])
  
  
  console.log(data,status,load)
  console.log(citydata,citystatus,cityload)
  return (
    <div>Setting</div>
  )
}

export default Setting