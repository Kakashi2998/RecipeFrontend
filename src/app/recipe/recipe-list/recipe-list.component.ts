import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Recipe} from "../../classes/recipe";
import {RecipeBackendService} from "../../services/recipe-backend.service";

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[];
  searchString: string;

  constructor(private route: ActivatedRoute, private recipeBackend: RecipeBackendService) {
  }

  ngOnInit(): void {
    this.recipes = []
    const filter = this.route.snapshot.url.toString();
    this.recipeBackend.getRecipes().subscribe(value => {
    let recipes: Recipe[] = value;
      if(filter === 'myRecipes'){
        for(const recipe of recipes){
          // if(recipe.bookmarked){
          //   this.recipes.push(recipe);
          // }
        }
      }else{
        this.recipes = recipes;
      }
    });

  }

  onBookmark(id: number) {
    this.recipeBackend.bookmark(id).subscribe(value => {
      this.ngOnInit();
    }, error => {
      this.ngOnInit();
    })
  }
}
