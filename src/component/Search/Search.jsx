import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import "./Search.css";

const Search = ({ items, setSearchList }) => {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = items.filter((item) => item.name.includes(search));

    setSearchList((prev) => [...prev, ...item]);
    setSearch("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="search-header">
        <BsSearch />
      </div>
      <input
        onChange={handleChange}
        type="text"
        value={search}
        placeholder="Search for item"
      />
    </form>
  );
};

export default Search;
