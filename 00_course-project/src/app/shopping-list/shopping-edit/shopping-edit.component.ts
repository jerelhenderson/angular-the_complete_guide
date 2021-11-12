import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared-features/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  addIngredientEmit() {
    const newIngredName = this.nameInputRef.nativeElement.value;
    const newIngredAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(newIngredName, newIngredAmount);
    this.addIngredient.emit(newIngredient)
  }
}
