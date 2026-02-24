import { useQuery } from "@tanstack/react-query";
import { getMealDetails } from "../api/apiMealDetails";

export function useMealDetails(idMeal: string) {
  const {
    data: mealDetails,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["meal-details", idMeal],
    queryFn: () => getMealDetails(idMeal),
  });
  return { mealDetails, error, isLoading };
}
