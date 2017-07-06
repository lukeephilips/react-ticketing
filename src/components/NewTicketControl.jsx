import React from "react";

class NewTicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {formVisibleOnPage: false};
  }

  handleDisplayingNewTicketForm(event){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    return (
      <button onClick={this.handleDisplayingNewTicketForm.bind(this)}>Request Help</button>
    );
  }


}

export default NewTicketControl;
