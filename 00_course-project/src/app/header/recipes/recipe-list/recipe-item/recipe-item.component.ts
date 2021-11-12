import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // Passes the click-selected recipe to the recipe-list.component
  @Output() selectedRecipe = new EventEmitter<void>();

  onSelect(recipe: string) {
    this.selectedRecipe.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
