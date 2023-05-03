import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class recipeService{
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg',[
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ] ),
        new Recipe('A Test Recipe 2', 'This is a test 2', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg',[
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 2)
        ] )
      ];

      constructor(private slService: shoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}