import { Pipe, PipeTransform } from '@angular/core';
import {Recipe} from "../classes/recipe";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipes: Recipe[], searchString: string): any {
    recipes.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    if(searchString === '' || searchString === undefined)
      return recipes;
    const output: Recipe[] = [];
    for(const recipe of recipes){
      if(recipe.name.toLowerCase().includes(searchString.toLowerCase())){
        output.push(recipe)
      }
    }
    return output;
  }

}
