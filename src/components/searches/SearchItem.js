import React from 'react'
import Card from '../ui/Card';
import styles from './SearchItem.module.css'
export const SearchItem = (props) => {
    let search = props.search;
    

    return (
      
<div>
   

      <Card>      
        <div className={styles.searchItem}>
        <div className={styles.nameCol}>{search.name}</div>
        <div className={styles.countryCol}>{search.country}</div>
        <div className={styles.stateCol}> {search.state}</div>
        <div className={styles.btnCol} >
          
        <button className={styles.btn}  onClick={() => props.onclickSelect(search)}>select</button>
        </div>
        </div>
        </Card>
        </div>
    )
}

export default SearchItem