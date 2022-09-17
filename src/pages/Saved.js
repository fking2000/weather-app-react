import React from 'react'
import SavedList from '../components/saves/SavedList'
import { fetchAllSaves } from '../js/saves'
import { useEffect } from 'react'
import { useState } from 'react'
import styles from './Saved.module.css'
const Saved = () => {
  const[Dashs,setDashs]=useState([])
  const [fetchResultsTitle,setFetchResultsTitle]=useState("")

  function setDashList(res_selected){
    if(res_selected.message===undefined){
    setFetchResultsTitle("Location(s):")
    setDashs(res_selected);
  }else{
    setFetchResultsTitle("Error: "+res_selected.message);
    setDashs([]);
  }}
  useEffect(()=>{
    async function populateIntialList()
    {
    let res;
    try
    {
    res= await fetchAllSaves();
    console.log(res);
    if(!res.ok){
      console.log(res);
    }else{
      let data = await res.json();
      console.log(data)
      
      setDashList(data)
    }
    }catch(err){
      console.log(err);
    }
    
    }
    populateIntialList();
      },[])
  return (<div>
    <div className={styles.headName}>SAVED LOCATIONS</div>
    <div><h4 className={styles.resultsTitle}>{fetchResultsTitle}</h4></div>
    <div>{(Dashs)&&<SavedList saves={Dashs}/>}</div>
   
    </div>
  )
}

export default Saved