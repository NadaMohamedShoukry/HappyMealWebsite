import { useQuery } from "@tanstack/react-query";
import { getAreas } from "../api/apiAreas";

export function useAreas() {
  const {
    data: areas,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["areas"],
    queryFn: getAreas,
  });
  return { areas, error, isLoading };
}
