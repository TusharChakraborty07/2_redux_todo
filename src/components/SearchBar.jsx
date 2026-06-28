import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inp, setInp] = useState("");

  const handelSearch = async (e) => {
    try {
      e.preventDefault();
      console.log(inp);
      dispatch(setQuery(inp));
      setInp("");
    } catch (error) {
      console.log("Error.: ", error);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center py-8 bg-gray-100">
        <form onSubmit={handelSearch} className="flex w-full max-w-2xl gap-3">
          <input
            required
            type="text"
            value={inp}
            onChange={(e) => setInp(e.target.value)}
            placeholder="Search anything..."
            className="flex-1 px-5 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 active:scale-95 transition"
          >
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
