import React from "react";
import { SubmitButton } from "../buttons/ColorButton";

const SearchBar = ({ onChange, placeholder }) => {
  return (
    <form onSubmit>
      <div className="searchBar">
        <div className="inputFieldSearch">
          <input type="text" placeholder={placeholder} onChange={onChange} />
        </div>
        <SubmitButton
          color="DarkBlueBtn"
          primary="true"
          className="buttonMedium"
          title="Search"
        />
      </div>
    </form>
  );
};

export default SearchBar;
