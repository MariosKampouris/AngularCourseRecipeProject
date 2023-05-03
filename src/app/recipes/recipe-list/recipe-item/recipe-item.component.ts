import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { recipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: recipeService){
  }

  ngOnInit(){
  }

  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
