//recipe.component is a child of app.component. It is responsible for displaying and formating each recipe.
//recipe.component is a parent of add-comment-form.component and edit-recipe-form.component.

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import { RECIPES } from '../recipe-data';


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent {
  
  //receives each recipe from app.component.html one at a time.
  @Input()recipe: Recipe;

  //showEditRecipeForm is a boolean that displays the edit-recipe-form.component for any individual recipe component
  showEditRecipeForm = false;

  //receive the RecipeFunctions so they can be used
  constructor(private reactFunctions: RecipeFunctions){}

  ngOnInit(): void {

	}

  //I'm not sure what this is for, but I was scared to delete it.
	arrayOne(n: number): any[] {
    return Array(n);
  }
  
  //causes the edit-recipe-form to be displayed on any one recipe component. This function is called when the Edit Recipe button is clicked on any recipe component.
  ShowEditRecipeForm(): void {
    this.showEditRecipeForm = true;
  }
  
  DeleteRecipe(): void {
    this.reactFunctions.deleteRecipe(this.recipe.name);
  }
}
