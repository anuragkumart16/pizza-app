import React from "react";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex flex-row items-center gap-2 p-4 mt-6 bg-[var(--color-tertiary)] rounded-xl">
      <Search />
      <input
        type="text"
        placeholder="Search by customer Id or name"
        className="outline-none w-[100%]"
      />
    </div>
  );
}

export default SearchBar;
