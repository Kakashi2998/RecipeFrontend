import {Component, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {RecipeBackendService} from "../../services/recipe-backend.service";
import {Recipe} from "../../classes/recipe";
import {Subject} from "rxjs";

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() bookmark = new Subject<number>();

  constructor(private router: Router, private recipeBackend: RecipeBackendService) {
  }

  ngOnInit(): void {
  }

  onAddToMyRecipes() {
    // this.recipeBackend.bookmark(this.recipe.id);
    this.bookmark.next(this.recipe.id);
    alert('Recipe: ' + this.recipe.name + ' added to My Recipes!')
  }

  showDetails(id: number) {

    this.router.navigate(['/recipes', id]);
  }
}
