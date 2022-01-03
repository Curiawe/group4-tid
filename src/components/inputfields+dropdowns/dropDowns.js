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

const SelectPaymentMethod = (props) => {
  return (
    <select defaultValue={"Select Payment Method"} onChange={(e) => props.onChange(e.target.value)}>
      <option value="Select Payment Method" disabled>
        Select Payment Method
      </option>
      <option value="Apple Pay">Apple Pay</option>
      <option value="Credit Card">Credit Card</option>
      <option value="Debit Card">Debit Card</option>
      <option value="MobilePay">MobilePay</option>
      <option value="PayPal">PayPal</option>
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

export { SelectCarGroup, SelectPaymentMethod, SelectLocation, SelectCarState };
