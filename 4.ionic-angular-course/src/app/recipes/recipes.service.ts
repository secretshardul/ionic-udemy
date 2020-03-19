import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Burger",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/800px-RedDot_Burger.jpg",
      ingredients: ["Bread", "Cheese", "Patty"]
    },
    {
      id: "r2",
      title: "Pizza",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg",
      ingredients: ["Dough", "Cheese", "Tomato"]
    }
  ];

  constructor() {}

  getAllRecipes(): Recipe[] {
    return [...this.recipes]; //pass complete array not reference
  }
  getRecipe(recipeId: string) {
    const foundRecipe = this.recipes.find(recipe => {
      return recipe.id == recipeId;
    });
    return { ...foundRecipe }; //pass complete object not reference
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId
    })
    console.log("after deletion", this.recipes);
  }
}
