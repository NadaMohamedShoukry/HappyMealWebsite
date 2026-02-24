import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "./context/ThemeContext";
import SearchPage from "./pages/SearchPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MealsCategoryPage from "./pages/MealsCategoryPage";
import MealsDetailsPage from "./pages/MealsDetailsPage";
import MealsAreaPage from "./pages/MealsAreaPage";
//index: true => default route No Path
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/search", element: <SearchPage /> },
        { path: "/meals/:categoryName", element: <MealsCategoryPage /> },
        { path: "/area/:areaName", element: <MealsAreaPage /> },
        { path: "/meals-details/:idMeal", element: <MealsDetailsPage /> },
      ],
    },
  ]);
  // dark:text-[#cce7c9] dark:bg-gray-900
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
