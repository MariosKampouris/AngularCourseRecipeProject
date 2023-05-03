import { Component } from '@angular/core';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [recipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService : recipeService){
  }
  
  ngOnInit(){
    this.recipeService.recipeSelected.subscribe((recipe : Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
