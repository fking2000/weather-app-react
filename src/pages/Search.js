import React from 'react'
import {useRef} from 'react'
import styles from './Search.module.css'
import SelectedList from '../components/searches/SelectedList';
import SearchList from '../components/searches/SearchList';
//import replacer from '../js/utils'
import { useState} from 'react';
import {fetchAllSearches,fetchSearch,postDash} from '../js/searches'

const Search = () => {
  const nameFormRef = useRef();


  const[selects,setSelects]=useState(undefined)
  const [fetchResultsTitle,setFetchResultsTitle]=useState("")
  const[searches,setSearches]=useState([])

  function setSearchList(res_searches){
    
    if(res_searches.message===undefined){
      setFetchResultsTitle(res_searches.length+"Result(s):")
      setSearches(res_searches);
    }else{
      setFetchResultsTitle("Error: "+res_searches.message);
      setSearches([]);
    }
   
    
  }
  function setSelectList(res_selected){
    if(res_selected.message===undefined){
    setFetchResultsTitle("Current Weather :")
    setSelects(res_selected);
  }else{
    setFetchResultsTitle("Error: "+res_selected.message);
    setSelects([]);
  }}
  
 
 
 
   
      function submitHandler(event){
      event.preventDefault();
      let search= {location:nameFormRef.current.value}
    
  async function searchList()
    {
    let res;
    try
    {  
      console.log(search)
    res= await fetchAllSearches(search);
     
      console.log(res);
    
      const data = await res.json();
      setSearchList(data)
  
   }catch(err){
      console.log(err);
    }
    
    }
    searchList()
    

  }
 
 async function selectedList(select)
  {
 
    select ={ lat:select.lat, lon:select.lon, locationNameByUser:select.locationNameByUser}

  let res;
   try
  {
  res= await fetchSearch(select);
  
    console.log(res);
  
    const data = await res.json();
    setSelectList(data)

  }catch(err){
    console.log(err);
  }
  
  }
 
  async function dashList(select)
  {
 
sIsClicked(true)
  let res;
   try
  {
    
  res= await postDash(select);
  
    console.log(res);
  
   

  }catch(err){
    console.log(err);
  }
  
  }

  
 
  
 const [IsClicked,sIsClicked]=useState(false);
  const [selectIsClicked,setselectIsClicked]=useState(false);
  const [searchIsClicked,setsearchIsClicked]=useState(false);
  function clickSearchHandler(){setSelects(undefined);setsearchIsClicked(true);setselectIsClicked(false)}
  

 
  // const [DeleteCoursesIsOpen,setDeleteCoursesIsOpen]=useState(false);
   function onClickAddToDash(select){ dashList(select); console.log(select)}
  // function closeDeleteCourse(){setDeleteCoursesIsOpen(false);}

 
  
   function clickSelectHandler(search){
    setselectIsClicked(true);
    selectedList(search);
    setsearchIsClicked(false);}
  // function closeUpdateCourse(){setUpdateCoursesIsOpen(false);} 
 

  return (
  <div>

<div className={styles.headName}>Search Locations</div>

    <form onSubmit={submitHandler}><div className={styles.searchBar}>
      <div><input id='location' name="location" placeholder="city" ref={nameFormRef}/></div>
      <div ><button className={styles.searchBtn} onClick={clickSearchHandler}>Search</button></div>
      </div>
    </form>
    <div><h4 className={styles.resultsTitle}>{fetchResultsTitle}</h4></div>
    <div> {(searchIsClicked)&&  <SearchList searches={searches}
    
    
  setsearchIsClicked={setsearchIsClicked}
     onclickSelect={clickSelectHandler}
   
   />
    }</div>
    <div> {(selects)&&  <SelectedList
    ic={sIsClicked}
    IsClicked={IsClicked}
     selects={selects}
     onClickAddToDash={onClickAddToDash}
 
  
   />
    }</div>
     
  



  </div>
  )
}

export default Search