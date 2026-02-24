import { useState } from "react";
import { useSearch } from "../hooks/useSearch";
import EmptySearchState from "../assets/undraw_cooking_j2pu.svg";
import { ClipLoader } from "react-spinners";
import { extractIngredients } from "../utils/extractIngredients";
import { useDebounce } from "@uidotdev/usehooks";
export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { searchResult, isLoading } = useSearch(debouncedQuery);
  const meal = searchResult?.[0];
  const ingredients = meal ? extractIngredients(meal) : [];
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <div>
        <input
          type="text"
          placeholder="Search for a meal..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full text-gray-700 dark:text-[#acd8a7] shadow-sm border border-gray-700 outline-none p-4 rounded-2xl mb-10 focus:ring-2 dark:border-[#8bca84] focus:ring-gray-700 dark:focus:ring-[#acd8a7]"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        {searchResult?.length === 0 ? (
          <div className="w-500 h-110">
            <img
              className="rounded-2xl"
              src={EmptySearchState}
              alt="empty-cooking-image"
            />
          </div>
        ) : (
          <div>
            {!isLoading ? (
              <div className="flex flex-col gap-5">
                {searchResult?.map((meal) => (
                  <div className="bg-[#acd8a7] dark:bg-[#8bca84] rounded-4xl flex flex-col sm:flex-row sm:justify-between items-center p-10">
                    <div
                      key={meal.idMeal}
                      className="flex flex-col sm:flex-row gap-10"
                    >
                      <img
                        className=" w-100 h-110 rounded-2xl"
                        alt={meal.strMeal}
                        src={meal.strMealThumb}
                      />

                      <div>
                        <h1 className="font-bold text-2xl text-gray-800 dark:text-gray-800 ">
                          {meal.strMeal}
                        </h1>
                        <div className="text-gray-700 font-medium">
                          Category:{" "}
                          <span className="text-gray-600">
                            {meal.strCategory}
                          </span>
                        </div>
                        <div className="text-gray-700 font-medium">
                          Area:{" "}
                          <span className="text-gray-600">{meal.strArea}</span>
                        </div>
                        <div>
                          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-800 hover:scale-105">
                            Ingredients
                          </h2>
                          <ul>
                            {ingredients.map((item, index) => (
                              <li
                                key={index}
                                className="border-b flex justify-between"
                              >
                                <span className="font-medium text-gray-700">
                                  {item.ingredient}
                                </span>

                                <span className="text-gray-600">
                                  {item.measure}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h2
                            className="font-semibold text-xl text-gray-800 dark:text-gray-800 
                  hover:scale-105 mt-1"
                          >
                            Instructions
                          </h2>
                          <p
                            className="whitespace-pre-line
                   text-gray-600"
                          >
                            {meal.strInstructions}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ClipLoader size={50} color="text-gray-800 dark:text-[#cce7c9]" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
