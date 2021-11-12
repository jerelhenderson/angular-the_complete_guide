import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // Exposes the Recipe array model to the recipes.component
  @Output() passedinRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is merely a test', 'https://stat.ameba.jp/user_images/20190720/06/hiro3ch/cd/e4/j/o1080080914507251056.jpg')
  ];

  onSelectedRecipe(recipe: Recipe) {
    this.passedinRecipe.emit(recipe);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
