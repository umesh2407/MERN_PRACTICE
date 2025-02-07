import React, { useState } from "react";
import ResturantCard from "./ResturantCard"; 
import resList from "../utils/mockData";

const Body = () => {
  const [reslist, setReslist] = useState(resList)
  const topRated = () =>{
    const filterdList =  reslist.filter((rest) => rest.rating > 4.5)
   setReslist(filterdList);
  }


  return (
    <div>
      <div>
        <input
          className="border border-black rounded-lg p-1 px-8 bg-slate-900 text-white m-5 mt-5 mb-5 items-center"
          placeholder="Search"
        ></input>
        <button className="border border-white rounded-lg p-2 bg-slate-800"
        onClick={topRated}
        >
        Top Rated
        </button>
      </div>
      <div className="grid grid-cols-5 items-center ">
        {reslist.map((rest) => (
        
          <ResturantCard key={rest.id} resObj={rest} />
          ))}
      </div>
    </div>
  );
};

export default Body;
