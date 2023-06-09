import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class recipeService{
    recipeSelected = new Subject<Recipe>();
    recipesChanged = new Subject<Recipe[]>();

    /*recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg',[
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
        ] ),
        new Recipe('A Test Recipe 2', 'This is a test 2', 'https://www.cookipedia.co.uk/wiki/images/b/bf/Rock_salmon_with_garlic_and_coriander.jpg',[
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 2)
        ] )
      ];*/
      private recipes: Recipe[] = [];

      constructor(private slService: shoppingListService){

      }

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
      }

      updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
      }

      deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
      }

      setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
      }
}