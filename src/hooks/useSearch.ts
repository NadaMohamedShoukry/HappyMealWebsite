import { useQuery } from "@tanstack/react-query";
import { Search } from "../api/apiSearch";

export function useSearch(query: string) {
  const {
    data: searchResult,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["search", query],
    queryFn: () => Search(query),
  });
  return { searchResult, error, isLoading };
}
