import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipesService } from "./recipes.service";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"]
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  constructor(private recipesService: RecipesService) {} //intercept service

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('loading recipes', this.recipes);
  }

  ionViewWillEnter() {
    this.recipes = this.recipesService.getAllRecipes();
  }
}
