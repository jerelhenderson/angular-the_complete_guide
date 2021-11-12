import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipeListComponent } from './header/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './header/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './header/recipes/recipe-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
