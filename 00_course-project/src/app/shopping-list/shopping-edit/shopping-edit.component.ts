import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared-features/ingredient.model';
import { ShoppingListService } from '../shopping-list.services';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit() {
  }

  addIngredientEmit() {
    const newIngredName = this.nameInputRef.nativeElement.value;
    const newIngredAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngredName, newIngredAmount);
    // this.addIngredient.emit(newIngredient)
    this.shoppingListService.addIngredient(newIngredient);
  }
}
