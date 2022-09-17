import React from 'react'
import Card from '../ui/Card';
import styles from './SelectedItem.module.css'
import Replacer from '../../js/utils'
import PopWindow from '../../layouts/PopWindow';
const SelectedItem = (props) => {
   
    let select = props.selects;


   

   console.log(select)
   let string = JSON.stringify(select,Replacer)
   console.log(string)
   let string2 = JSON.parse(string);
let send={locationNameByUser:select['locationNameByUser'],lat:select['coord']['lat'],lon:select['coord']['lon'],country:select['sys']['country']}
//    function s(data) {
//     if (data) {
//       for (var i = 0; i < data.length; i++) {}}
   //let locationNameByUser= {locationNameByUser: props.selects.locationNameByUser}
  // let escription={}
  return (<div>
    <Card>  {(typeof select !="undefined")?(  
        <div className={styles.selectItem}>
        <div className={styles.maintCol}>{string2['main']['temp']}°C</div>
        <div className={styles.nameCol}>{string2['locationNameByUser']}</div>
        <div className={styles.descCol}>{string2['weather'][0]['description']}</div>
        
        <div className={styles.tempCol}>
        <div className={styles.nameCol}>Min:{string2['main']['temp_min']}°C</div>
        <div className={styles.nameCol}>Max:{string2['main']['temp_max']}°C</div>
        </div>
         <div className={styles.windCol}>{string2['wind']['speed']} Meter/Sec</div>
        <div className={styles.btnCol} ><button className={styles.btn} onClick={ () => props.onClickAddToDash(send)}>add to dash</button></div>
      
        </div>):('')}  
        </Card>
        {props.IsClicked&&<PopWindow ic={props.ic}/>}
         </div>
       
    )
}

export default SelectedItem