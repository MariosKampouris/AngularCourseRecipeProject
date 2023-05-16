import { Component, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { shoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private slService: shoppingListService){
  }

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

  onEditItem(index: number){
    this.slService.startedEditing.next(index);
  }
}
