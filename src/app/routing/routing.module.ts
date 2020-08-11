import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {RecipeComponent} from "../recipe/recipe.component";
import {RecipeDetailComponent} from "../recipe/recipe-detail/recipe-detail.component";
import {RecipeListComponent} from "../recipe/recipe-list/recipe-list.component";
import {ShoppingListComponent} from "../shopping-list/shopping-list.component";
import {AuthComponent} from "../auth/auth.component";
import {LoginComponent} from "../auth/login/login.component";
import {SignupComponent} from "../auth/signup/signup.component";

const routes: Routes = [
  {path: 'recipes', component: RecipeComponent, children: [
      {path: 'myRecipes', component: RecipeListComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: '', component: RecipeListComponent},
    ]},
  {path: 'shopping', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]},
  {path: '**', redirectTo: 'recipes'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
