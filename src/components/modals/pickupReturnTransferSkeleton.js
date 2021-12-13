import React from "react";
import "./modal.css";

/* The content rows for the pickup, return and transfer modal */
const Overlay = (props) => {
  return (
    <div className="overlayContentRow">
      <div className="rowTitle">
        <h5>{props.title}</h5>
      </div>
      <div className="rowBody">{props.children}</div>
    </div>
  );
};

export { Overlay };
