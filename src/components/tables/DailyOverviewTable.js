import { useState } from "react";
import { CARGROUPS } from "../../data/carGroups";
import { BOOKINGS } from "../../data/bookings";
import { CARS } from "../../data/cars";
import { TRANSFERS } from "../../data/transfer";
import { COLORS } from "../../values/colors";
import { ButtonStyled } from "../buttons/ColorButton";
import { ButtonOnChange } from "../buttons/ColorButton";
import { InputField } from "../inputfields+dropdowns/inputFields";
import { CARSTATES } from "../../data/carStates";

function littleRow(item, column, date, index) {
  const currDate = new Date(date).toLocaleDateString("da-DA");
  let avail = 0;
  let book = 0;
  let rel = 0;

  // check bookings for today
  BOOKINGS.map((booking) => {
    const bookingDate = new Date(booking.Pickup.time).toLocaleDateString(
      "da-DA"
    );
    if (bookingDate === currDate && booking.carGroup === item) {
      book++;
    }
    return null;
  });

  // check available cars
  // must also check for soon to be released cars!
  CARS.map((car) => {
    if (car.carGroup === item && car.Status === CARSTATES.READY) {
      avail++;
    }
    return null;
  });

  // check released cars
  TRANSFERS.map((transfer) => {
    let transferDate = new Date(transfer.Date).toLocaleDateString("da-DA");
    let car = transfer.Car;
    if (transferDate === currDate && car.carGroup === item) {
      rel++;
    }
    return null;
  });

  let need = book - avail;
  let bgColor = "";
  let transferString = "";

  if (need < 0) {
    bgColor = COLORS.Yellow200;
    transferString = "Release Car";
  } else if (need > 0) {
    bgColor = COLORS.Red200;
    transferString = "Request Car";
  } else {
    bgColor = COLORS.Green200;
    transferString = "Transfer";
  }

  column.push(
    <tr key={index.toString()}>
      <td>{item.name}</td>
      <td>{book}</td>
      <td>{avail}</td>
      <td>{rel}</td>
      <td style={{ backgroundColor: bgColor }}>
        {need}{" "}
        <ButtonStyled
          link="/transfers"
          className="buttonSmall"
          color="DarkBlueBtn"
          title={transferString}
          style={{ padding: "0px" }}
        />
      </td>
    </tr>
  );
  return null;
}

function TableRow(props) {
  let column = [];
  let date = new Date(props.date);
  CARGROUPS.map((item, index) => littleRow(item, column, date, index));

  return <>{column}</>;
}

export default function DailyOverviewTable() {
  const [date, setDate] = useState(new Date());

  return (
    <>
      <div className="pageFilters"></div>

      <div className="pageContent" style={{ flexDirection: "column" }}>
        <p id="medium">Current Date: {new Date(date).toLocaleDateString()}</p>{" "}
        <div className="searchBar">
          <InputField
            className="inputField"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            placeHolder="Date" /*{new Date(date)}"*/
          />
          <ButtonOnChange
            onClick={(e) => setDate(new Date())}
            title="Jump to Today"
            primary="true"
            className="buttonMedium"
            color="DarkBlueBtn"
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Car Group</th>
              <th>Bookings</th>
              <th>Available</th>
              <th>Released</th>
              <th>Need</th>
            </tr>
          </thead>
          <tbody>
            <TableRow date={date} />
          </tbody>
        </table>
      </div>
    </>
  );
}
