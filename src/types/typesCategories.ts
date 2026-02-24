export type Category = {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};
export type CategoriesResponse = {
  categories: Category[];
};
export type Meals = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
export type MealsResponse = {
  meals: Meals[];
};
