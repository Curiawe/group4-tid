import LargeCardBody from "../components/cards/CardsForOverview";
import { CARS } from "../data/cars";
import "../components/cards/cards.css";

function Cars() {
  const cards = [];

  CARS.map((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMargin">
        <LargeCardBody
          car={selCar.License}
          onClick={(e, input) => {
            return null;
          }}
          className="card"
        />
      </div>
    );
  });

  return (
    <>
      <div className="pageTitle">
        <h1>Car Overview</h1>
      </div>
      <div className="pageContent">
        <div>
          <div className="cardPageMargin">{cards}</div>
        </div>
      </div>
    </>
  );
}

export default Cars;
