import React from "react";
import "./inputFieldsAndDropdown.css";
import { CARGROUPS } from "../../data/carGroups";
import { LOCATIONS } from "../../data/locations";
import { CARSTATES } from "../../data/carStates";

const SelectCarGroup = (props) => {
  function makeOptions() {
    let myOptions = [];
    CARGROUPS.map((group) => {
      myOptions.push(
        <option value={group.name} key={group.name}>
          {group.name}
        </option>
      );
    });
    return myOptions;
  }

  return (
    <select
      defaultValue={props.defaultValue}
      onChange={(e) => props.onChange(e.target.value)}
    >
      <option value="Select Car Group" disabled>
        Select Car Group
      </option>
      {makeOptions()}
    </select>
  );
};

const SelectLocation = (props) => {
  const locations = LOCATIONS;

  return (
    <select defaultValue={props.defaultValue} onChange={props.onChange}>
      <option value={props.dropdownTitle} disabled>
        {props.dropdownTitle}
      </option>
      <option value={locations[0].Location}>{locations[0].Location}</option>
      <option value={locations[1].Location}>{locations[1].Location}</option>
      <option value={locations[2].Location}>{locations[2].Location}</option>
      <option value={locations[3].Location}>{locations[3].Location}</option>
      <option value={locations[4].Location}>{locations[4].Location}</option>
      <option value={locations[5].Location}>{locations[5].Location}</option>
      <option value={locations[6].Location}>{locations[6].Location}</option>
      <option value={locations[7].Location}>{locations[7].Location}</option>
    </select>
  );
};

const SelectCarState = (props) => {
  const carStates = CARSTATES;

  return (
    <select defaultValue={"Select Car State"} onChange={props.onChange}>
      <option value="Select Car State" disabled>
        Select Car State
      </option>
      <option value={carStates[0]}>Ready</option>
      <option value={carStates[1]}>Rented</option>
      <option value={carStates[2]}>Returned</option>
      <option value={carStates[3]}>Transfer</option>
      <option value={carStates[4]}>Unaivailable</option>
    </select>
  );
};

const SelectTime = (props) => {
  const OpeningHours = {
    8: "08:00",
    10: "10:00",
    12: "12:00",
    14: "14:00",
    16: "16:00",
    18: "18:00",
    20: "20:00",
  };

  return (
    <select defaultValue={props.defaultValue} onChange={props.onChange} className={props.className}>
      <option value="Select Time" disabled>
        Select Time
      </option>
      <option value={OpeningHours[0]}>08:00</option>
      <option value={OpeningHours[1]}>10:00</option>
      <option value={OpeningHours[2]}>12:00</option>
      <option value={OpeningHours[3]}>14:00</option>
      <option value={OpeningHours[4]}>16:00</option>
      <option value={OpeningHours[5]}>18:00</option>
      <option value={OpeningHours[6]}>20:00</option>
    </select>
  );
};

export { SelectCarGroup, SelectLocation, SelectCarState, SelectTime };
