import React from "react";

const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <>
      <input
        className="form-control"
        placeholder="Buscar película..."
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      ></input>
    </>
  );
}

export default SearchBox;
