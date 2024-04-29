import React from 'react'
import "../../styles/Home/EventsHosted.css"
import eventshosted from "../../assets/eventshosted.png";
import { FaChevronRight } from "react-icons/fa";
function EventsHosted() {
  return (
    <div className="events-hosted-container">
    <div className="events-hosted-title">Events</div>
    <div className="events-img-container">
        {/* <img src={eventshosted} alt="events hosted" /> */}
        <div className="events-text-holder">
        <div className="events-header">Hackathon</div>
        <div className="events-details">Save the date! Our Hackathon kicks off on 26/02/2023 at 9:00AM, hosted at Guindy. Get ready to code, collaborate, and redefine the future of technology!</div>
        <div className="events-button-holder">
            <button className="event-btn register-now-btn">Register Now <FaChevronRight style={{verticalAlign:"middle", marginLeft:"1rem"}}/></button>
            <button className="event-btn events-view-details-btn">View Details <FaChevronRight style={{verticalAlign:"middle", marginLeft:"1rem"}}/></button>
        </div>
        </div>
    </div>
    </div>
    
  )
}

export default EventsHosted