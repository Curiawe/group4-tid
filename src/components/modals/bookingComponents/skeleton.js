import React from "react";
import "../modal.css";

/* Skeleton for components for the booking modal */
const BookingComponent = (props) => {
  return (
    <div>
      <div className="bookingTitles">
        <h5>{props.title}</h5>
      </div>
      <div className="bookingBody">{props.children}</div>
    </div>
  );
};

export { BookingComponent };
