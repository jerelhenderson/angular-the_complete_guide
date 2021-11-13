import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Exposes the Recipe array model to the recipes.component
  // @Output() passedinRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[];

  // onSelectedRecipe(recipe: Recipe) {
  //   this.passedinRecipe.emit(recipe);
  // }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
