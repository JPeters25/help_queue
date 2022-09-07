import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

function TicketList(props){
  const ticketListStyledComponentsStyles = {
    backgroundColor: '##00ff45',
    color: '#fdfcfe',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingBottom: '20px',
    textAlign: 'center'
  }
  return (
    <React.Fragment>
      <div style= {ticketListStyledComponentsStyles}>
      <hr/>
        {props.ticketList.map((ticket, index) =>
          <Ticket names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
            )}
      </div>
    </React.Fragment>

  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array
};

export default TicketList;