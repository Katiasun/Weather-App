import { AsyncPaginate } from "react-select-async-paginate";

export default function Search() {
  return (
    <AsyncPaginate
      placeholder="Search for city"
      value={search}
      depounceTimeout={600}
      onChange={handleOnChange}
    />
  );
}
