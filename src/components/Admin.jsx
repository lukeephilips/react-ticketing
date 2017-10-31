import React from 'react';
import {connect} from 'react-redux';
import TicketList from './TicketList';
import c from '../constants';

class Admin extends React.Component{
  constructor(props){
    super(props);
    this.closeTicket = this.closeTicket.bind(this);
  }
  closeTicket(id){
    const { dispatch } = this.props;
    const action = {
      type: c.DELETE_TICKET,
      id: id
    }
    dispatch(action);
  }

  render() {
    return (
      <div>
        <h2>Admin things</h2>
        <TicketList
          currentRoute={this.props.location.pathname}
          ticketList = {this.props.adminMasterTicketList}
          closeTicket = {this.closeTicket}
        />
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    adminMasterTicketList: state
  }
}
export default connect(mapStateToProps)(Admin);
