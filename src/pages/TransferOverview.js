import { useState } from "react";
import "../components/cards/cards.css";
import TransferCardBody from "../components/cards/TransferCards";
import { ButtonOnChange } from "../components/buttons/ColorButton";
import { TransferModal } from "../components/modals/transferModal";
import { CARS } from "../data/cars";
import DailyOverviewTable from "../components/tables/DailyOverviewTable";

function TransferOverview() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  const cards = [];
  CARS.map((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMargin">
        <TransferCardBody car={selCar.License} />
      </div>
    );
  });

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
        <DailyOverviewTable />
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
            color="LightBlueBtn"
            primary="true"
            className="buttonMedium"
            title="Release Car"
            onClick={() => setShowReleaseModal(true)}
          />
          <TransferModal
            showReleaseModal={showReleaseModal}
            onClose={() => setShowReleaseModal(false)}
            onConfirm={() => setShowReleaseModal(false)}
          ></TransferModal>
        </div>
        <div className="box">
          <div className="cardPageMargin">{cards}</div>
        </div>
      </div>
    </>
  );
}

export default TransferOverview;
