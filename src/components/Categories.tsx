import { ClipLoader } from "react-spinners";
import { useCategories } from "../hooks/useCategories";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const { categories, isLoading } = useCategories();
  const [viewAll, setViewAll] = useState(false);
  const visibleCategories = viewAll ? categories : categories?.slice(0, 3);

  return (
    <div className="mt-10 text-gray-800 dark:text-[#cce7c9]">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Categories:</h1>
        <button
          onClick={() => setViewAll((viewAll) => !viewAll)}
          className="underline"
        >
          {viewAll ? "View Less" : "View All"}
        </button>
      </div>
      {!isLoading ? (
        <div className="mt-5 flex flex-wrap flex-col justify-around sm:flex-row gap-5 items-center ">
          {visibleCategories?.map((category) => (
            <NavLink to={`/meals/${category.strCategory}`}>
              <div
                key={category.idCategory}
                className="cursor-pointer flex flex-col gap-2 items-center border border-gray-500 rounded-3xl p-5 shadow shadow-[#cce7c9] 
            transition-all duration-300 hover:shadow-lg hover:scale-105 "
              >
                <img
                  alt={category.strCategory}
                  src={category.strCategoryThumb}
                />
                <h2 className="text-xl font-semibold">
                  {category.strCategory}
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
