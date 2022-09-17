import React from 'react'
import styles from './PerfectItem.module.css'
import Card from '../ui/Card';

const PerfectItem = (props) => {
    let select = props.save;

  return (
    <Card>  {(typeof select !="undefined"&& 13<select['main']['temp']<26&&select['wind']['speed']<3&&(select['weather'][0]['description']==='clear sky'||select['weather'][0]['description']==='overcast clouds'))?(  
        <div className={styles.selectItem}>
        <div className={styles.maintCol}>{select['main']['temp']}°C</div>
        <div className={styles.nameCol}>{select['locationNameByUser']}</div>
        <div className={styles.descCol}>{select['weather'][0]['description']}</div>
        
        <div className={styles.tempCol}>
        <div className={styles.nameCol}>Min:{select['main']['temp_min']}°C</div>
        <div className={styles.nameCol}>Max:{select['main']['temp_max']}°C</div>
        </div>
         <div className={styles.windCol}>{select['wind']['speed']} Meter/Sec</div>
      
        </div>):(null)}  
        </Card>
  )
}

export default PerfectItem