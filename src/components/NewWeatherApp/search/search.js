import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

export default function Search({ onSearchChange }) {
  const [search, setSearch] = useState(null);

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const loadOptions = (inputValue) => {};

  return (
    <AsyncPaginate
      placeholder="Search for city"
      value={search}
      debounceTimeout={600}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
}
