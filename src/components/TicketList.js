import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";




function TicketList(props){
  const ticketListStyledComponentsStyles = {
    color: '#fdfcfe',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    width: '20rem',
    marginRight: '800',
    margin: 'auto'
  }
  return (

    <React.Fragment>
      <Card style={ticketListStyledComponentsStyles}>
            {props.ticketList.map((ticket) =>
              <Ticket 
                whenTicketClicked = { props.onTicketSelection }
                names={ticket.names}
                location={ticket.location}
                issue={ticket.issue}
                id = {ticket.id}
                key={ticket.id}/>
                )}
      </Card>
    </React.Fragment>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};

export default TicketList;