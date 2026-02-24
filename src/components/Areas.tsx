import { useState } from "react";
import { useAreas } from "../hooks/useAreas";
import { ClipLoader } from "react-spinners";
import { NavLink } from "react-router-dom";

export default function Areas() {
  const { areas, isLoading } = useAreas();
  const [viewAll, setViewAll] = useState(false);
  const visibleAreas = viewAll ? areas : areas?.slice(0, 21);
  return (
    <div className="mt-10 text-gray-800 dark:text-[#cce7c9]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Areas:</h1>
        <button
          onClick={() => setViewAll((viewAll) => !viewAll)}
          className="underline"
        >
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>
      {!isLoading ? (
        <div className="mt-5 flex flex-wrap justify-around sm:flex-row gap-5 items-center ">
          {visibleAreas?.map((area) => (
            <NavLink to={`/area/${area.strArea}`}>
              <div
                key={area.strArea}
                className="cursor-pointer flex items-center justify-center bg-[#cce7c9] dark:bg-[#acd8a7] dark:text-gray-700 w-35 h-15 border border-gray-500 rounded-full p-5 shadow shadow-[#cce7c9] 
             transition-all duration-300 hover:shadow-lg hover:scale-105 "
              >
                <h2 className="text-xl font-semibold">{area.strArea}</h2>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <ClipLoader size={50} color="text-gray-800 dark:text-[#cce7c9]" />
      )}
    </div>
  );

  // </div>
}
