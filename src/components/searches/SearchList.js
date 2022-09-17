import React from 'react'
import styles from './SearchList.module.css'
import SearchItem from './SearchItem'
import Card from '../ui/Card'
import '../../pages/Search'

const SearchList = (props) => {
  console.log(props.searches)
  return (
    <ul className={styles.searchList}>
        <li><Card> <div className={styles.searchItem}>
      <div className={styles.nameCol}>name</div>
      <div className={styles.countryCol}>country</div> 
      <div className={styles.stateCol}>state</div>
          </div>
          </Card>
</li>

      
  
        {props.searches.map((search)=> 
          
          
          <li key={search.lon}> 

          <SearchItem search={search}   
            onclickSelect={props.onclickSelect}
           
           /> </li>)}
      
          
         
      </ul>
  )
}

export default SearchList