import axios from "axios";
import {
  type MealsResponse,
  type CategoriesResponse,
  type Category,
  type Meals,
} from "../types/typesCategories";

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await axios.get<CategoriesResponse>(
      "https://www.themealdb.com/api/json/v1/1/categories.php",
    );
    console.log(res.data.categories);
    return res.data.categories;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getMealsByCategory(
  categoryName: string,
): Promise<Meals[]> {
  try {
    const res = await axios.get<MealsResponse>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`,
    );
    return res.data.meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
