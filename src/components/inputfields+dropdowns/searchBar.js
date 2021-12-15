import React from "react";
import { SubmitButton } from "../buttons/ColorButton";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <form method="get">
      <div className="searchBar">
        <div className="inputField">
          <input type="text" placeholder={placeholder} onChange={onChange} />
        </div>
        <SubmitButton
          color="DarkBlueBtn"
          primary="true"
          className="buttonLarge"
          title="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;
