import React from "react";
import styles from './styles/Header.css';
import {Link} from 'react-router-dom';

function Header(props){
  return (
    <div className = { styles.header }>
      <h1>Help Queue</h1>
    <Link to="/">Queue</Link> | <Link to="/admin">Admin</Link>
    </div>
   );
}

export default Header;
