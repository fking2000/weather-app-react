import React from 'react'
import Card from '../ui/Card';
import styles from './SavedItem.module.css'
const SavedItem = (props) => {
   
    let select = props.save;

console.log(JSON.stringify(select['locationNameByUser']))
   
  
   
  return (<div>
    <Card>  {(typeof select !="undefined")?(  
        <div className={styles.selectItem}>
        <div className={styles.maintCol}>{select['main']['temp']}°C</div>
        <div className={styles.nameCol}>{select['locationNameByUser']}</div>
        <div className={styles.descCol}>{select['weather'][0]['description']}</div>
        
        <div className={styles.tempCol}>
        <div className={styles.nameCol}>Min:{select['main']['temp_min']}°C</div>
        <div className={styles.nameCol}>Max:{select['main']['temp_max']}°C</div>
        </div>
         <div className={styles.windCol}>{select['wind']['speed']} Meter/Sec</div>
      
        </div>):('')}  
        </Card>
         </div>
       
    )
}

export default SavedItem