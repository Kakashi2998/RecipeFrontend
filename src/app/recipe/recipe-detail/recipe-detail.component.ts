import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ShoppingService} from "../../services/shopping.service";
import {Ingredient} from "../../classes/ingredient";
import {Recipe} from "../../classes/recipe";
import {RecipeBackendService} from "../../services/recipe-backend.service";

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeBackendService: RecipeBackendService, private route: ActivatedRoute, private shoppingService: ShoppingService) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.recipeBackendService.getRecipe(id).subscribe(value => {
      this.recipe = value;
    });
  }

  EmptyRecipe(): boolean {
    return this.recipe === undefined;
  }

  onAddToShoppingList(ingredients: Ingredient[]){
    this.shoppingService.addToShoppingList(ingredients);
    alert('Items added to shopping List!');
  }

}
