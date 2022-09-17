import React from 'react';
import { Link }from 'react-router-dom';
import Styles from'./AppHeader.module.css';

export const AppHeader=()=>{
    return(
      
        <header className={Styles.header} >
        
            <nav>
                <ul>
                    <li> Weather DashBoard</li>
                    <li><Link to="/">HomePage</Link></li>
                    <li><Link to="/search">Search Locations</Link></li>
                    <li><Link to="/saved">Show Saved Locations</Link></li>
                </ul>
            </nav>
        </header>  
    )
}
export default AppHeader;