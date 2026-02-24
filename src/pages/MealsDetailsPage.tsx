import { useParams } from "react-router-dom";
import { useMealDetails } from "../hooks/useMealDetails";
import { ClipLoader } from "react-spinners";
import { extractIngredients } from "../utils/extractIngredients";

export default function MealsDetailsPage() {
  const { idMeal } = useParams();
  const { mealDetails, isLoading } = useMealDetails(idMeal || "");
  const meal = mealDetails?.[0];
  const ingredients = meal ? extractIngredients(meal) : [];
  return (
    <div className="container mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      {!isLoading ? (
        <div
          className="bg-[#acd8a7] dark:bg-[#8bca84]
    
 rounded-4xl flex flex-col sm:flex-row sm:justify-between items-center p-10"
        >
          {mealDetails?.map((meal) => (
            <div key={meal.idMeal} className="flex flex-col sm:flex-row gap-10">
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
                  <span className="text-gray-600">{meal.strCategory}</span>
                </div>
                <div className="text-gray-700 font-medium">
                  Area: <span className="text-gray-600">{meal.strArea}</span>
                </div>
                <div>
                  <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-800 hover:scale-105">
                    Ingredients
                  </h2>
                  <ul>
                    {ingredients.map((item, index) => (
                      <li key={index} className="border-b flex justify-between">
                        <span className="font-medium text-gray-700">
                          {item.ingredient}
                        </span>

                        <span className="text-gray-600">{item.measure}</span>
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
          ))}
        </div>
      ) : (
        <ClipLoader size={50} color="text-gray-800 dark:text-[#cce7c9]" />
      )}
    </div>
  );
}
