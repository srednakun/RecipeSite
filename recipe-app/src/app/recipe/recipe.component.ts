import { Component, OnInit } from '@angular/core';

//import recipe class and recipeFunctions 
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})

export class RecipeComponent {

  recipes: Recipe[] = [];

  constructor(private reactFunctions: RecipeFunctions){}

  ngOnInit(): void {
  	//display default recipes
  	this.recipes = this.reactFunctions.getAllRecipes();
	}

	 arrayOne(n: number): any[] {
    return Array(n);
  }
}
