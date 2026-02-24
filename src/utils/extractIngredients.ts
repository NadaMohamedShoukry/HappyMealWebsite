import type { MealDetails } from "../types/typesMealDetails";

export function extractIngredients(meal: MealDetails) {
  const ingredients: { ingredient: string; measure: string }[] = [];
  for (let i = 1; i < 20; i++) {
    const ingredientKey = `strIngredient${i}` as keyof MealDetails;
    const measureKey = `strMeasure${i}` as keyof MealDetails;

    const ingredient = meal[ingredientKey];
    const measure = meal[measureKey];
    if (typeof ingredient === "string" && ingredient.trim()) {
      ingredients.push({
        ingredient,
        measure: typeof measure === "string" ? measure : "",
      });
    }
  }
  return ingredients;
}
