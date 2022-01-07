import "./tables.css";
import { useState } from "react";

// Date Picker
import DatePicker from "sassy-datepicker";

//
import { BOOKINGS } from "../../data/bookings";
import { WALKINS } from "../../data/walkins";

function dateArray(date) {
  let dates = [date];
  for (let i = 1; i < 10; i++) {
    dates.push(new Date(date).setDate(date.getDate() + i));
  }
  return dates;
}

function setEstimate(walkin, input) {
  const reg = new RegExp("^[0-9]*$");
  if (input === "") {
    walkin.estimate = 0;
  } else if (reg.test(input)) {
    walkin.estimate = input;
  } else {
    alert("The estimate must be a number. For exampe \n 3");
  }
}

let walkins = WALKINS;

function getWalkins(date) {
  let registered = 0;
  let currDate = new Date(date).toLocaleDateString("da-DA");
  BOOKINGS.map((booking) => {
    const thisDate = new Date(booking.Pickup.time).toLocaleDateString("da-DA");
    if (thisDate === currDate && booking.isWalkin) {
      registered++;
    }
    return null;
  });
  return registered;
}

function WalkinHeader() {
  return (
    <thead>
      <tr>
        <th>Date</th>
        <th>Estimate Walk-ins</th>
        <th>Registered</th>
      </tr>
    </thead>
  );
}

/**
 * Table row function with automatic db addition of selected dates
 *
 * @param {Date} props date
 * @returns a table row with three cells, containing selected date, corresponding walkin estimate and registrations
 */
function WalkinRow(props) {
  let entryFound = false;
  let outputDate = new Date(props.date).toLocaleDateString("da-DA");
  let outputEstimate;
  let outputRegistered;
  let outputWalkin;

  for (let i = 0; i < walkins.length; i++) {
    // setting up the comparing strings (It doesn't work anymore if you try to do it all in one :((
    let currentDate = new Date(walkins[i].date).toLocaleDateString("da-DA");

    if (outputDate === currentDate) {
      outputEstimate = walkins[i].estimate;
      outputRegistered = getWalkins(props.date);
      outputWalkin = i;
      entryFound = true;
      break;
    } else {
    }
  }

  if (!entryFound) {
    walkins.push({
      date: new Date(props.date),
      estimate: 0,
      total: 0,
      changeable: true,
    });
    outputEstimate = 0;
    outputRegistered = 0;
  }

  return (
    <tr>
      <td>{outputDate}</td>
      <td>
        <input
          type="text"
          name="estimate"
          placeholder={outputEstimate}
          onChange={(e) => {
            setEstimate(walkins[outputWalkin], e.target.value);
          }}
        />{" "}
      </td>
      <td>{outputRegistered}</td>
    </tr>
  );
}

function WalkinContent(props) {
  const allDates = dateArray(props.date);
  let allRows = []; //this will have the table rows

  for (let i = 0; i < allDates.length; i++) {
    // for every element in allDates
    let currentDate = new Date(props.date);
    currentDate.setDate(props.date.getDate() + i);
    allRows.push(<WalkinRow key={currentDate} date={currentDate} />);
  }

  return <tbody>{allRows}</tbody>;
}

/**
 *
 * @param {Date} props defines the range of the table.
 * @returns a <table /> element with 11 rows, showing consecutive dates and their walk-in status,
 * with the selected date as the middle element.
 */
function WalkinTable() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <>
      <DatePicker onChange={onChange} selected={date} />
      <table>
        <WalkinHeader />
        <WalkinContent date={date} />
      </table>
    </>
  );
}

export default WalkinTable;
