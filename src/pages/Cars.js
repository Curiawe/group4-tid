import { LargeCardBody } from "../components/cards/CardsForOverview";
import { CARS } from "../data/cars";
import "../components/cards/cards.css";

function Cars() {
  const cards = [];

  // if there are issues with this code, change .forEach() in line 9 to .map()
  CARS.forEach((selCar) => {
    cards.push(
      <div key={selCar.License} className="cardMarginNonHover">
        <LargeCardBody
          car={selCar.License}
          onClick={(e, input) => {
            return null;
          }}
          className="cardNonHover"
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
