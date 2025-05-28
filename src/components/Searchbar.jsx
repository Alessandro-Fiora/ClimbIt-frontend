import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar() {
  const [searchWord, setSearchWord] = useState("");
  const navigate = useNavigate();

  const onChangeSearch = (e) => {
    setSearchWord(e.target.value);
  };

  const searchButtonHandler = () => {
    navigate("/books", {
      state: {
        filter: searchWord,
      },
    });

    setSearchWord("");
  };

  return (
    <>
      <form
        id="searchbar"
        className="rounded-pill border border-light px-3 py-1 d-flex align-items-center"
        onSubmit={(e) => {
          e.preventDefault();
          searchButtonHandler();
        }}
      >
        <input
          type="text"
          className="form-control bg-transparent border-0 text-light"
          id="search"
          placeholder="Cosa cerchi?"
          value={searchWord}
          onChange={onChangeSearch}
          autoComplete="off"
        />
        <button
          id="search-btn"
          className="btn p-0"
          type="submit"
          aria-label="Cerca"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}
