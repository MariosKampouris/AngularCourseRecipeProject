import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  constructor(private slService: shoppingListService){

  }

  onAddItem(ingName , ingAmount){
    const newIngredient = new Ingredient(ingName.value, ingAmount.value);
    this.slService.addIngredient(newIngredient);
  }
}
