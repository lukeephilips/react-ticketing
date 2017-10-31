import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';

function Ticket(props){
  const timeSinceOpened = new Moment().to(props.timeOpened);
  const close = () => {
    props.closeTicket(props.id);
  }
  let ticketDetails =
  <div>
    <h3>{props.location} - {props.names}</h3>
    <p><em>{props.issue}</em></p>
    <p>{timeSinceOpened}</p>
  </div>
  if (props.currentRoute == "/admin") {
    return (
      <div>
        {ticketDetails}
        <button onClick={close} >close</button>
      </div>
    )
  } else {
    return (
      <div>
      {ticketDetails}
    </div>
    )
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  timeOpened: PropTypes.number.isRequired,
  issue: PropTypes.string,
  currentRoute: PropTypes.string,
  id: PropTypes.string.isRequired
};


export default Ticket;
