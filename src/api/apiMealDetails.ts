import axios from "axios";
import {
  type MealDetailsResponse,
  type MealDetails,
} from "../types/typesMealDetails";

export async function getMealDetails(idMeal: string): Promise<MealDetails[]> {
  try {
    const res = await axios.get<MealDetailsResponse>(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,
    );
    return res.data.meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
