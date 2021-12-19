import { useState } from "react";
import "../components/cards/cards.css";
import audi from "../images/audi-a6.jpg";
import honda from "../images/honda-crv.jpg";
import renault from "../images/renault-captur.jpg";
import TransferCardBody from "../components/cards/TransferCards";
import { ButtonOnChange } from "../components/buttons/ColorButton";
import { TransferModal } from "../components/modals/transferModal";

function TransferOverview() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  return (
    <>
      <div className="pageTitle">
        <h1>Transfer Overview</h1>
      </div>
      <div className="pageFilters">
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
      </div>
      <div className="pageContent">
        <div className="cardPageMargin">
          <div className="cardMargin">
            <TransferCardBody car="JB12789" src={honda} />
          </div>
          <div className="cardMargin">
            <TransferCardBody car="IH94302" src={renault} />
          </div>
          <div className="cardMargin">
            <TransferCardBody car="FC56789" src={audi} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TransferOverview;
