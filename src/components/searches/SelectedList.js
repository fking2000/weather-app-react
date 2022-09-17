import React from 'react'
import SelectedItem from './SelectedItem'
import styles from './SelectedList.module.css'
import Card from '../ui/Card'
const SelectedList = (props) => {
    
  return (
  <ul className={styles.selectedList}>
         <li> {
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

        <li > 
        <SelectedItem
        ic={props.ic}
         IsClicked={props.IsClicked}
         selects={props.selects}
          onClickAddToDash={props.onClickAddToDash}
      /> </li>
      </ul>
  )
}

export default SelectedList