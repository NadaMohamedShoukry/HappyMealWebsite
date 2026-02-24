import { useQuery } from "@tanstack/react-query";
import { getMealsByArea } from "../api/apiAreas";

export function useMealsArea(areaName: string) {
  const {
    data: mealsArea,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["meals-area", areaName],
    queryFn: () => getMealsByArea(areaName),
  });
  return { mealsArea, error, isLoading };
}
