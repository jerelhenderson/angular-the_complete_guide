import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared-features/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // Below: ingredients[] in the array in this component, ingredient is passed from shopping-edit.component
  onAddIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
