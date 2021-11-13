import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.services';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // Passes the click-selected recipe to the recipe-list.component
  // @Output() selectedRecipe = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  onSelect(recipe: string) {
    // this.selectedRecipe.emit();
    this.recipeService.selectedRecipe.emit(this.recipe)
  }

  ngOnInit(): void {
  }

}
