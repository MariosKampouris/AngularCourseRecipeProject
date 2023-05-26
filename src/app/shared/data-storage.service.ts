import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { recipeService } from "../recipes/recipe.service";
import { map } from "rxjs-compat/operator/map";

@Injectable()
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: recipeService){}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put('https://ng-recipe-project-7fdfd-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(response =>{
            console.log(response);
        });
    }

    fetchRecipes() {
        this.http.get<Recipe[]>('https://ng-recipe-project-7fdfd-default-rtdb.firebaseio.com/recipes.json')
        .subscribe(recipes => {
            this.recipeService.setRecipes(recipes);
        })
    }
}