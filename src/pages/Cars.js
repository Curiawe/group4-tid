import { LargeCardBody } from "../components/cards/CardsForOverview";
import { CARS } from "../data/cars";
import "../components/cards/cards.css";
import Parse from "parse";
import { useState, useEffect } from "react";
import { IconBody } from "../components/cards/IconBody";
import ColorIcon from "../components/cards/AvailabilityIcon";
import { Icon } from "@iconify/react";

function Cars() {
  const cards = [];
  const [readResults, setReadResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [foundBookings, setFoundBookings] = useState([]);

  useEffect(() => {
    const readCars = async function () {
      setIsLoading(true);
      // Reading parse objects is done by using Parse.Query
      const parseQuery = new Parse.Query("Cars");
      parseQuery.include("location");
      parseQuery.include("carGroup");
      try {
        let cars = await parseQuery.find();
        setReadResults(cars);
        setIsLoading(false);
        return true;
      } catch (error) {
        // Error can be caused by lack of Internet connection
        alert(`Error! ${error.message}`);
        return false;
      }
    };
    readCars();
  }, []);

  const resetCarsView = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");
    parseQuery.limit(10);
    parseQuery.include("location");
    parseQuery.include("carGroup");
    try {
      let cars = await parseQuery.find();
      setReadResults(cars);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const readGreenCars = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");
    parseQuery.limit(10);
    parseQuery.matches("color", "RED");
    try {
      let cars = await parseQuery.find();
      setReadResults(cars);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const magicButton = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");
    parseQuery.limit(10);
    parseQuery.containedBy("name", "A - Small");
    try {
      let cars = await parseQuery.find();
      setReadResults(cars);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const doQueryByName = async function (e) {
    // Create our Parse.Query instance so methods can be chained
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");

    // `contains` is a basic query method that checks if string field
    // contains a specific substring

    parseQuery.matches("model", e, "i");

    try {
      let profiles = await parseQuery.find();
      setReadResults(profiles);
      console.log(readResults);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const bookingSearch = () => {
    if (searchInput == null) return;
    const foundBookings = doQueryByName(searchInput);
    setFoundBookings(foundBookings);
  };

  /* {
    readResults !== undefined &&
      readResults.map((profile, index) => {
        <div className="cardPageMargin">
          <div key={`${index}`} className="cardMarginNonHover">
            <LargeCardBody
              car={`${profile.get("model")}`}
              onClick={(e, input) => {
                return null;
              }}
              className="cardNonHover"
            />
          </div>
        </div>;
      });
  }
  {
    readResults !== undefined && readResults.length <= 0 ? (
      <p>{"No results here!"}</p>
    ) : null;
  } */

  // if there are issues with this code, change .forEach() in line 9 to .map()
  /*   CARS.forEach((selCar) => {
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
  }); */

  return (
    <>
      <div className="pageTitle">
        <h1>Car Overview</h1>
      </div>
      <div className="pageContent">
        <div className="bookingOvBtns">
          <div className="searchBar">
            <div className="inputFieldSearch">
              <input
                type="search"
                placeholder='e.g. "Toyota"'
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <button
              type="button"
              onClick={() => bookingSearch()}
              className="darkBlueBtn"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => readGreenCars()}
              className="darkBlueBtn"
            >
              Show red Cars!
            </button>
            <button
              type="button"
              onClick={() => resetCarsView()}
              className="darkBlueBtn"
            >
              Show all
            </button>
            <button
              type="button"
              onClick={() => magicButton()}
              className="darkBlueBtn"
            >
              Magic Button
            </button>
          </div>
        </div>
        <div className="scrollableContainer">
          <div className="bookingCardPageMargin">
            {isLoading &&
            readResults !== undefined &&
            readResults.length <= 0 ? (
              <p> Loading cars...</p>
            ) : (
              readResults !== undefined &&
              readResults.map((profile, index) => (
                <div key={`${index}`} className="cardMarginNonHover">
                  <div className="cardNonHover">
                    <img
                      className="cardImg"
                      src={`${profile.get("image").url()}`}
                      alt="carpic"
                    />
                    <div className="h4Large"> {`${profile.get("model")}`} </div>
                    <div className="p1Large">
                      {" "}
                      {`${profile.get("carGroup").get("name")}`}
                    </div>
                    <div className="p2"> {`${profile.get("license")}`} </div>
                    <div className="cardBodyLarge">
                      <div className="iconRow">
                        <IconBody
                          title={`${profile.get("carGroup").get("seats")}`}
                          icon="user"
                        />
                        <IconBody
                          title={`${profile.get("carGroup").get("baggage")}`}
                          icon="briefcase"
                        />
                        <div className="iconBody">
                          <div className="mainIcons">
                            <Icon
                              icon="mdi:car-door"
                              width="23.07px"
                              height="25.01px"
                            />
                          </div>
                          <div className="mainDescription">5</div>
                        </div>
                      </div>

                      <div className="iconRow">
                        <IconBody
                          title={`${profile.get("fuelType")}`}
                          icon="droplet"
                        />
                        <IconBody title="Manual" icon="settings" />
                        <ColorIcon title={`${profile.get("color")}`} />
                      </div>
                      <div className="iconRow">
                        <IconBody
                          title={
                            `${profile.get("location").get("location")}` +
                            ", " +
                            `${profile.get("location").get("locationId")}`
                          }
                          icon="map-pin"
                        />
                      </div>
                      <div className="iconRow">
                        <ColorIcon title={`${profile.get("status")}`} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
            {!isLoading &&
            readResults !== undefined &&
            readResults.length <= 0 ? (
              <p>{"No results here!"}</p>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cars;
