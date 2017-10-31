import React from "react";
import Ticket from './Ticket';
import PropTypes from 'prop-types';

function TicketList(props){
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          timeOpened={ticket.timeOpened}
          currentRoute={props.currentRoute}
          closeTicket={props.closeTicket}
          id={ticket.id}
          key={ticket.id}
        />
      )}
    </div>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array.isRequired,
  currentRoute: PropTypes.string
};

export default TicketList;
