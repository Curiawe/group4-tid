import { CARGROUPS } from "../../data/carGroups";
import "./tables.css";

function makeRows() {
  let rows = [];
  CARGROUPS.map((group) => {
    let row = (
      <tr key={group.name}>
        <td>{group.name}</td>
        <td>{group.Seats}</td>
        <td>{group.Baggage}</td>
        <td>{group.Price}</td>
      </tr>
    );
    rows.push(row);
    return null;
  });

  return rows;
}

function CarGroupTable() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Car Group</th>
            <th>Seats</th>
            <th>Baggage Capacity</th>
            <th>Hourly Price</th>
          </tr>
        </thead>
        <tbody>{makeRows()}</tbody>
      </table>
      <p style={{ fontSize: "12px" }}>
        *All ScanCar cars come with 100 km per hour for up to 6 hours per day.
        Any additional mileage can be bought for 2 DKK/km when placing the
        booking. If the mileage has exceeded the mileage included in the booking
        upon return, the extra mileage will be charged 20 DKK/km.
      </p>
    </>
  );
}

export default CarGroupTable;
