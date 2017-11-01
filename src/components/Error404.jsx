import React from 'react';
import {Link} from 'react-router-dom';

function Error404(props){
  return (
    <div>
      <h2>No Dice found at {props.location.pathname}.</h2>
      <Link to="/">Back Home?</Link>
    </div>
  )
}

export default Error404;
