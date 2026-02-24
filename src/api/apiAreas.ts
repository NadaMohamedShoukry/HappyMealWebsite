import axios from "axios";
import type { Area, AreasResponse } from "../types/typesAreas";
import type { Meals, MealsResponse } from "../types/typesCategories";
export async function getAreas(): Promise<Area[]> {
  try {
    const res = await axios.get<AreasResponse>(
      "https://www.themealdb.com/api/json/v1/1/list.php?a=list",
    );
    return res.data.meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export async function getMealsByArea(areaName: string): Promise<Meals[]> {
  try {
    const res = await axios.get<MealsResponse>(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`,
    );
    console.log(res.data.meals);
    return res.data.meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
