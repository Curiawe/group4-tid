import { useState } from "react";
import "../components/cards/cards.css";
import TransferCardBody from "../components/cards/TransferCards";
import { ButtonOnChange } from "../components/buttons/ColorButton";
import { TransferModal } from "../components/modals/transferModal";
import { LOCATIONS } from "../data/locations";
import {
  FilterCarRequest,
  FilterCarRelease,
} from "../components/cards/FilterTransferCards";

function TransferOverview() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  // requests
  const reqCards = [];
  let reqCars = FilterCarRequest(LOCATIONS[0]);

  if (reqCars.length > 0) {
    reqCars.map((selCar) => {
      reqCards.push(
        <div key={selCar} className="cardMarginNonHover">
          <TransferCardBody car={selCar} />
        </div>
      );
      return null;
    });
  } else {
    reqCards.push(
      <div>
        <h3>No Requests.</h3>
      </div>
    );
  }

  // releases
  const relCards = [];
  let relCars = FilterCarRelease(LOCATIONS[0]);

  if (relCars.length > 0) {
    relCars.map((selCar) => {
      relCards.push(
        <div key={selCar} className="cardMarginNonHover">
          <TransferCardBody car={selCar} />
        </div>
      );
      return null;
    });
  } else {
    relCards.push(
      <div>
        <h3>No Requests.</h3>
      </div>
    );
  }

  // Closing the modals on escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setShowRequestModal(false);
      setShowReleaseModal(false);
    }
  });

  return (
    <>
      <div className="pageTitle">
        <h1>Transfer Overview</h1>
      </div>
      <div className="pageContent">
        <div className="bookingOvBtn1">
          <ButtonOnChange
            color="PurpleBtn"
            primary="true"
            className="buttonMedium"
            title="Request Car"
            onClick={() => setShowRequestModal(true)}
          />
          <TransferModal
            showRequestModal={showRequestModal}
            onClose={() => setShowRequestModal(false)}
            onConfirm={() => setShowRequestModal(false)}
          ></TransferModal>
          <ButtonOnChange
            color="PurpleBtn"
            primary="true"
            className="buttonMedium"
            title="Release Car"
            onClick={() => alert("Sorry, releasing cars is not possible, yet.")}
          />
          <TransferModal
            showReleaseModal={showReleaseModal}
            onClose={() => setShowReleaseModal(false)}
            onConfirm={() => setShowReleaseModal(false)}
          ></TransferModal>
        </div>
        <div className="box">
          <h2>Requests</h2>
          <div className="cardPageMargin">{reqCards}</div>
        </div>
        <div className="box">
          <h2>Releases</h2>
          <div className="cardPageMargin">{relCards}</div>
        </div>
      </div>
    </>
  );
}

export default TransferOverview;
