import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RecipeListComponent} from './recipe/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe/recipe-item/recipe-item.component';
import {RecipeDetailComponent} from './recipe/recipe-detail/recipe-detail.component';
import {HeaderComponent} from './header/header.component';
import {RecipeComponent} from './recipe/recipe.component';
import {IngredientsComponent} from './ingredients/ingredients.component';
import {ItemComponent} from './ingredients/item/item.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {RoutingModule} from "./routing/routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {AddItemFormComponent} from './shopping-list/add-item-form/add-item-form.component';
import {SearchPipe} from './pipes/search.pipe';
import {HttpClientModule} from "@angular/common/http";
import {ShoppingItemComponent} from './shopping-list/shopping-item/shopping-item.component';
import {AuthComponent} from './auth/auth.component';
import {
  FacebookLoginProvider, GoogleLoginProvider,
  SocialAuthService,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "angularx-social-login";



@NgModule({
  declarations: [
    AppComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    HeaderComponent,
    RecipeComponent,
    IngredientsComponent,
    ItemComponent,
    SidebarComponent,
    FooterComponent,
    ShoppingListComponent,
    AddItemFormComponent,
    SearchPipe,
    ShoppingItemComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '136432329016-882rg5sca18532vqpu2b24j7m6s0sg43.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('1143830252656301'),
          },

        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
