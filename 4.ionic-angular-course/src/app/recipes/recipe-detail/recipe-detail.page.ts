import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Recipe } from "../recipe.model";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      //observer
      if (!paramMap.has("recipeId")) {
        return;
      }
      const recipeId = paramMap.get("recipeId");
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      console.log(this.loadedRecipe.title);
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: "Delete?",
        message: "Do you really want to delete the recipe?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel"
          },
          {
            text: "Delete",
            handler: () => {
              this.recipesService.deleteRecipe(this.loadedRecipe.id);
              console.log(
                "deleted",
                this.recipesService.getAllRecipes().length
              );
              this.router.navigate(["/recipes"]);
            }
          }
        ]
      })
      .then(alertBox => alertBox.present());
  }
}
