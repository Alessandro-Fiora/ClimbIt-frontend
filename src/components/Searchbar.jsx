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
        className="text-bg-secondary rounded-5 border border-light ps-3 pe-3 pt-1 pb-1 d-flex"
        onSubmit={(e) => {
          e.preventDefault();
          searchButtonHandler();
        }}
      >
        <input
          type="text"
          className="form-control"
          id="search"
          placeholder="Cerca"
          value={searchWord}
          onChange={onChangeSearch}
        />
        <button id="search-btn" className="btn pe-0">
          <div className="search-icon d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </button>
      </form>
    </>
  );
}
