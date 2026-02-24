import { useQuery } from "@tanstack/react-query";
import { getMealsByCategory } from "../api/apiCategories";

export function useMealsCategory(categoryName: string) {
  const {
    data: mealsCategory,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["meals-category", categoryName],
    queryFn: () => getMealsByCategory(categoryName),
  });
  return { mealsCategory, error, isLoading };
}
