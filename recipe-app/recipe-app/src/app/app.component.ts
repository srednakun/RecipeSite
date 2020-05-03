//app.component creates the main page. 
//app.component is a parent of recipe.component and add-recipe-form.component

import { Component } from '@angular/core';
import { RECIPES } from './recipe-data'
import { Recipe } from './recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'recipe-app';
  //showAddRecipeForm causes the add-recipe-form component to be displayed when true.
  showAddRecipeForm = false;
  //Creates an array called recipe of type Recipe that is equal to the existing RECIPES list.
  recipes: Recipe[] = RECIPES;

  //Causes the add-recipe-form to be displayed. This function is called when the New Recipe button is clicked.
  ShowNewRecipeForm(): void {
  	this.showAddRecipeForm = true;
  }

}
