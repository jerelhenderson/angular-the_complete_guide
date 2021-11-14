import { EventEmitter, Injectable } from "@angular/core";

import { Ingredient } from "../shared-features/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.services";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('天ぷら',
        '美味しい天ぷら',
        'https://stat.ameba.jp/user_images/20190720/06/hiro3ch/cd/e4/j/o1080080914507251056.jpg',
        [
            new Ingredient('えび', 4),
            new Ingredient('サツマイモ', 1)
        ])
    ];

    constructor(private shoppingListService: ShoppingListService) {};

    getRecipes() {
        return this.recipes.slice();
    }

    pushIngredientToList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}