import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  function handleOnChange(searchData) {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <AsyncPaginate
      placeholder="Search for city"
      value={search}
      depounceTimeout={600}
      onChange={handleOnChange}
    />
  );
}
