import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [reslist, setReslist] = useState(resList);
  const [filteredRestlist, setFilteredRestlist] = useState(reslist);
  const [inputsearch, setInputsearch] = useState("");


  const topRated = () => {
    const filterdList = reslist.filter((rest) => rest.rating > 4.5);
    setFilteredRestlist(filterdList);
  };

  const searchText = () => {
    const filterdList = reslist.filter((rest) => rest.name.includes(inputsearch));
    setFilteredRestlist(filterdList);
  };

  return (
    <div>
      <div className="flex gap-10">
        <div>
          <input
            className="border border-black rounded-lg p-1 px-8 bg-slate-900 text-white items-center"
            placeholder="Search"
            value={inputsearch}
            onChange={(e) => setInputsearch(e.target.value)}
          ></input>
          <button
            className="border border-gray-500 ml-5 rounded-sm p-2 bg-slate-800"
            onClick={searchText}
          >
            Search
          </button>
        </div>
        <button
          className="border border-gray-500 rounded-sm  bg-slate-800 p-2"
          onClick={topRated}
        >
          Top Rated
        </button>
      </div>
      <div className="grid grid-cols-5 items-center ">
        {filteredRestlist.map((rest) => (
          <ResturantCard key={rest.id} resObj={rest} />
        ))}
      </div>
    </div>
  );
};

export default Body;
