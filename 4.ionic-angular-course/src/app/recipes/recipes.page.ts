import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Burger',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/800px-RedDot_Burger.jpg',
      ingredients: ['Bread', 'Cheese', 'Patty']
    },
    {
      id: 'r2',
      title: 'Pizza',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/800px-Pizza-3007395.jpg',
      ingredients: ['Dough', 'Cheese', 'Tomato']
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
