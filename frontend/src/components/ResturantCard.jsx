import React from "react";


const ResturantCard = ({ resObj }) => {
  const { name, cuisine, rating, opening_hours } = resObj;
  return (
    <div>
      <div className="container w-[200px] h-[300px] p-5 m-5 border hover:border-white border-black bg-slate-800 rounded-xl">
        <img
          className="p-5"
          src="https://static.vecteezy.com/system/resources/previews/025/065/315/non_2x/fast-food-meal-with-ai-generated-free-png.png"
        />
        <h1 className="font-semibold">{name}</h1>
        <h2 className="text-sm mt-2">{cuisine.join(", ")}</h2>
        <div className="border border-white rounded-2xl p-1 text-sm mt-4 text-center">
          {rating}
        </div>
        <div className="p-1 text-sm mt-4 text-center">{opening_hours}</div>
      </div>
    </div>
  );
};

export default ResturantCard;
