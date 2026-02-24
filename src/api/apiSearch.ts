import axios from "axios";

export async function Search(query: string) {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );
    return res.data.meals;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
