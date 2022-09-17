import React from 'react'
import styles from './HomePage.module.css'

const HomePage = () => {
  return (
    <div>
    <div className={styles.headName}>Weather DashBoard</div>
    <div className={styles.main}>

    <div className={styles.panel}>
    <div className={styles.text}><h2>Search and Add Locations</h2></div>
    <div><a href="/search"><button>Search</button></a></div>
    </div>

    <div className={styles.panel}>
    <div className={styles.text}><h2>Saved Locations</h2></div>
    <div><a href="/saved"><button>Saved</button></a></div>
    </div>

    </div>
    </div>
  )
}

export default HomePage