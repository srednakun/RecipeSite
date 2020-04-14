import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import recipe functions
import { RecipeFunctions } from './recipe-functions';
import { RecipeComponent } from './recipe/recipe.component';
import { AddRecipeFormComponent } from './add-recipe-form/add-recipe-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    AddRecipeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //make RecipeFunctions class available to all components
  //by adding it to providers.
  providers: [RecipeFunctions],
  bootstrap: [AppComponent]
})
export class AppModule { }
