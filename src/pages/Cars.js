import "../components/cards/cards.css";
import Parse from "parse";
import { useState, useEffect } from "react";
import { IconBody } from "../components/cards/IconBody";
import ColorIcon from "../components/cards/AvailabilityIcon";
import { Icon } from "@iconify/react";
import { ButtonNoLink } from "../components/buttons/ColorButton";

function Cars() {
  const [readResults, setReadResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [foundCars, setFoundCars] = useState([]);

  useEffect(() => {
    const readCars = async function () {
      setIsLoading(true);
      // Reading parse objects is done by using Parse.Query
      const parseQuery = new Parse.Query("Cars");
      parseQuery.include("location");
      parseQuery.include("carGroup");
      try {
        let cars = await parseQuery.findAll();
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
    parseQuery.include("location");
    parseQuery.include("carGroup");
    try {
      let cars = await parseQuery.findAll();
      setReadResults(cars);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const readBlueCars = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");
    parseQuery.matches("color", "BLU");
    try {
      let cars = await parseQuery.findAll();
      setReadResults(cars);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const readAvailableCars = async function () {
    // Reading parse objects is done by using Parse.Query
    const parseQuery = new Parse.Query("Cars");
    parseQuery.matches("status", "Available");
    try {
      let cars = await parseQuery.findAll();
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
      let profiles = await parseQuery.findAll();
      setReadResults(profiles);
      console.log(readResults);
      return true;
    } catch (error) {
      // Error can be caused by lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  const search = () => {
    if (searchInput == null) return;
    const found = doQueryByName(searchInput);
    setFoundCars(found);
    return foundCars;
  };

  function carCount() {
    var size = Object.keys(readResults).length;
    if (!readResults) {
      return "";
    } else if (isLoading) {
      return "Loading cars...";
    } else {
      return size + " cars found";
    }
  }

  return (
    <>
      <div className="pageTitle">
        <h1>Car Overview</h1>
      </div>

      <div className="pageContent">
        <div className="bookingOvButtons">
          <div className="bookingOvBtn1">
            <div className="searchBar">
              <div className="inputFieldSearch">
                <input
                  type="search"
                  placeholder='e.g. "Toyota"'
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <ButtonNoLink
                color="DarkBlueBtn"
                onClick={() => search()}
                className="btnMedium"
                title="Search"
              />
            </div>
          </div>

          <div className="bookingOvBtn2" style={{ width: "30%" }}>
            <ButtonNoLink
              color="PurpleBtn"
              onClick={() => readBlueCars()}
              className="btnXlarge"
              title="Blue cars"
            />
            <ButtonNoLink
              color="PurpleBtn"
              onClick={() => readAvailableCars()}
              className="btnMedium"
              title="Available cars"
            />
            <ButtonNoLink
              color="PurpleBtn"
              primary="false"
              onClick={() => resetCarsView()}
              className="btnMedium"
              title="Reset"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "8px",
          }}
        >
          {carCount()}
        </div>{" "}
        <div className="scrollableContainer">
          <div className="bookingCardPageMargin">
            {readResults !== undefined &&
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
              ))}
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
