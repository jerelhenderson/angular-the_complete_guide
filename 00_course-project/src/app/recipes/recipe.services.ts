import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Test Recipe', 'This is merely a test', 'https://stat.ameba.jp/user_images/20190720/06/hiro3ch/cd/e4/j/o1080080914507251056.jpg')
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}