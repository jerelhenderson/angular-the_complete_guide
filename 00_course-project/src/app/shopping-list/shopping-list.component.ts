import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/shared-features/ingredient.model';
import { ShoppingListService } from './shopping-list.services';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredient();
    this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  // Below: ingredients[] in the array in this component, ingredient is passed from shopping-edit.component
  // onAddIngredient(ingredient: Ingredient) {
  //   this.ingredients.push(ingredient);
  // }

}
