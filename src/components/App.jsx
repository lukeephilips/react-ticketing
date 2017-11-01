import React from "react";
import Header from './Header';
import Queue from './Queue';
import Admin from './Admin';
import styles from './styles/App.css';
import {Switch, Route} from 'react-router-dom';
import Error404 from './Error404';

function App(props){
  return (
    <div className = {styles.app}>
      <Header/>
      <div className="wrapper">
        <Switch>
          <Route exact path="/" component={Queue} />
          <Route path="/admin" component={Admin} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
