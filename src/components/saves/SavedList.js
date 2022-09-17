import React from 'react'
import SavedItem from './SavedItem'
import styles from './SavedList.module.css'
import Card from '../ui/Card'
import PerfectItem from './PerfectItem'
const SavedList = (props) => {
    
   
    
   
    console.log(props.saves)
  
  return (<div>
  <ul className={styles.selectedList}>
        <div> <li> {
            <Card>
      <div className={styles.selectItem}>
      <div className={styles.emptyCol}></div>
      <div className={styles.locationCol}>location</div>
      <div className={styles.descCol}>Description</div> 
      <div className={styles.tempCol}>Temperature</div> 
      <div className={styles.windCol}>Wind</div>
      <div className={styles.emptyCol}></div>
          </div>
          </Card>}
          </li> 

          {props.saves.map((save)=> 
          
          
          <li key={save.locationNameByUser}> 

        <SavedItem
       
         save={save}
         
      />  </li>)}</div>
      <div><h3 className={styles.h}>Perfect Locations</h3></div>
    <div> <li className={styles.perfect}> {
            <Card >
      <div className={styles.selectItem}>
      <div className={styles.emptyCol}></div>
      <div className={styles.locationCol}>location</div>
      <div className={styles.descCol}>Description</div> 
      <div className={styles.tempCol}>Temperature</div> 
      <div className={styles.windCol}>Wind</div>
      <div className={styles.emptyCol}></div>
          </div>
          </Card>}
          </li> 
      {props.saves.map((save)=> 
          
          
          <li key={save.locationNameByUser}> 

        <PerfectItem
       
         save={save}
         
      /></li>)}</div> 
      </ul></div>
  )
}

export default SavedList