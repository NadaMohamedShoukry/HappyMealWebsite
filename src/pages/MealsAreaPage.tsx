import { NavLink, useParams } from "react-router-dom";

import { ClipLoader } from "react-spinners";
import { useMealsArea } from "../hooks/useMealsArea";

export default function MealsAreaPage() {
  const { areaName } = useParams();
  const { mealsArea, isLoading } = useMealsArea(areaName || "");

  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-2xl text-gray-800 dark:text-[#cce7c9]">
        {areaName}
      </h1>
      {!isLoading ? (
        <div className="mt-5 flex flex-wrap flex-col justify-around sm:flex-row gap-5 items-center ">
          {mealsArea?.map((meal) => (
            <NavLink to={`/meals-details/${meal.idMeal}`}>
              <div
                key={meal.idMeal}
                className="w-90 h-50 cursor-pointer flex flex-col gap-2 justify-center items-center border border-gray-500 rounded-3xl p-2 shadow shadow-[#cce7c9] 
            transition-all duration-300 hover:shadow-lg hover:scale-105 "
              >
                <img
                  className="w-30 h-20 rounded-xl"
                  alt={meal.strMeal}
                  src={meal.strMealThumb}
                />
                <h2 className="text-lg font-semibold text-center text-gray-700 dark:text-[#cce7c9]">
                  {meal.strMeal}
                </h2>
              </div>
            </NavLink>
          ))}
        </div>
      ) : (
        <ClipLoader size={50} color="text-gray-800 dark:text-[#cce7c9]" />
      )}
    </div>
  );
}
