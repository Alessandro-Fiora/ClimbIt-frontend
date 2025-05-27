import { useState } from "react";

export default function Searchbar() {
  const [searchword, setSearchword] = useState("");

  return (
    <>
      <div
        id="searchbar"
        className="text-bg-secondary rounded-5 border border-light ps-3 pe-3 pt-1 pb-1"
      >
        Searchbar
      </div>
    </>
  );
}
