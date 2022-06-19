import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A teste Recipe', 'This is a simply test', 'https://static.onecms.io/wp-content/uploads/sites/9/2021/02/12/roast-chicken-with-chile-basil-vinaigrette-charred-broccoli-potatoes-FT-RECIPE0321.jpg')
  ]
  constructor() { }

  getRecipes() {
    return this.recipes.slice()
  }
}
