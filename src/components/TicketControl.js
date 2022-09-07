// Parent Component for NewTicketForm.js and TicketList.js

import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';


class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTicketList: [],
      selectedTicket: null
    };
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    this.setState({mainTicketList: newMainTicketList,
                  formVisibleOnPage: false });
  }
  handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    this.setState({
      mainTicketList: newMainTicketList,
      selectedTicket: null
    });
  }
  handleClick = () => {
    if(this.state.selectedTicket != null) {
      this.setState ({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
	  this.setState(prevState => ({
		  formVisibleOnPage: !prevState.formVisibleOnPage
	  }));
  }
}
  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket=> ticket.id === id)[0];
    this.setState({selectedTicket : selectedTicket});
  }

render(){
  const styledButton = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '20px',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '800',
    margin: 'auto'
    }
    
	let currentlyVisibleState = null;
	let buttonText = null; 
  if (this.state.selectedTicket != null) {
    currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} />
    buttonText = "Return to Ticket List";
  }

	else if (this.state.formVisibleOnPage) {
		currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />;
		buttonText = "Return to Ticket List"; 
	} else {
		currentlyVisibleState = <TicketList ticketList={this.state.mainTicketList} onTicketSelection ={this.handleChangingSelectedTicket} />
    buttonText = "Add Ticket" 
	}
	return (
		<React.Fragment>
			{currentlyVisibleState}
			<button style= {styledButton} onClick={this.handleClick}>{buttonText}</button> 
		</React.Fragment>
	);
}

}

export default TicketControl;