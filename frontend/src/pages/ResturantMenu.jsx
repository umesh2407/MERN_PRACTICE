import React from "react";
import { useParams } from "react-router-dom";
import { resList } from "../utils/mockData"; 

const ResturantMenu = () => {
  const { resId } = useParams();
  const restaurant = resList[resId - 1];

  if (!restaurant) {
    return <div className="text-center text-red-500">Restaurant not found</div>;
  }

  return (
    <div className="p-10 bg-slate-800 w-full h-[400px] items-center text-center">
      <h1 className="text-3xl text-slate-200 font-bold">{restaurant.name}</h1>
      <p className="text-slate-200">{restaurant.description}</p>
      <p className="text-slate-200">📍 {restaurant.address}</p>
      <p className="text-yellow-500">⭐ {restaurant.rating}</p>
      <p className="text-slate-200">⏰ {restaurant.opening_hours}</p>
</div>
    
  );
};

export default ResturantMenu;
