import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Recipe} from "../classes/recipe";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RecipeBackendService{


  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  public getRecipes(): Observable<Recipe[]>{
      if(!this.authService.isLoggedIn){
        this.router.navigate(['/auth']);
        return new Observable<Recipe[]>();
      }
      return this.http.get('http://localhost:8080/api/recipes',
        {headers: new HttpHeaders({'Authorization':'Bearer ' + this.authService.token})})
      .pipe(map(value => {
        return <Recipe[]>value;
      }));
  }

  public getRecipe(id: number): Observable<Recipe>{
    if(!this.authService.isLoggedIn){
      this.router.navigate(['/auth']);
      return new Observable<Recipe>();
    }
    return this.http.get('http://localhost:8080/api/recipes/' + (id),
    {headers: new HttpHeaders({'Authorization':'Bearer ' + this.authService.token})})
      .pipe(map(value => {
        return <Recipe>value;
      }));
  }

  bookmark(id: number){
    return this.http.put('http://localhost:8080/api/recipes/' + (id+1) + '/bookmark', {});
  }


}
