import React from "react";
import SearchIcon from "../../assets/icon-search.svg";

function Search({ onChange, searchInput }) {
  return (
    <div className="relative min-w-80">
      <div className="absolute left-2 inset-y-0 flex items-center pr-3">
        <img src={SearchIcon} alt="search icon" className="w-4 h-4" />
      </div>
      <input
        type="text"
        alt="search"
        value={searchInput}
        onChange={onChange}
        placeholder="Search"
        className="bg-white rounded-lg w-full  min-h-8 border border-beige-500 border-solid  placeholder:border-beige-500 text-[14px] pl-8 placeholder:pl-3"
      />
    </div>
  );
}

export default Search;
