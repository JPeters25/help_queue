import React from "react";
import PropTypes from "prop-types";


function Ticket(props){
  const ticketSyledComponentStyles = {
    backgroundColor: '#be8d00'
  }
  return (
    <React.Fragment>
      <div style = {ticketSyledComponentStyles}>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket;