//edit-recipe-form.component is a child of recipe.component. It is responsible for creating input boxes for taking edits from the user, and committing those changes.

import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-edit-recipe-form',
  templateUrl: './edit-recipe-form.component.html',
  styleUrls: ['./edit-recipe-form.component.css']
})

export class EditRecipeFormComponent implements OnInit {

	//recives one recipe from recipe.component
	@Input() recipe: Recipe;

	ingredientsAsString = ""
	stepsAsString = ""

	//receive the RecipeFunctions so they can be used
	constructor(private recipeFunctions: RecipeFunctions) { }

	ngOnInit(): void {
		
		//format the ingredients and steps as strings to be displayed in the edit form
		for(var i = 0; i < this.recipe.ingredients.length; i++){
			this.ingredientsAsString += this.recipe.ingredients[i] + "\n";
		}

		for(var i = 0; i < this.recipe.steps.length; i++){
			this.stepsAsString += this.recipe.steps[i] + "\n";
		}
	}


  	//commits the edit to the list of recipes. This function is called when the Edit Recipe button is clicked inside the edit-recipe-form component.
	onSubmit(formInfo: NgForm){

		//gets the recipe info from the form.
		//ingredients and steps are taken as strings and must be formatted into an array. Credit to Srenda Kunowski.
		var name = formInfo.value.name;
		var description = formInfo.value.description;
		var ingredients = formInfo.value.ingredients;
		var steps = formInfo.value.steps;
		var stepsArray;
		var ingredientsArray;

		//if any of the fields have been left blank, replace them with the existing information
		if(name === ""){
			name = this.recipe.name;
		}

		if(description === ""){
			description = this.recipe.description;
		}

		if(steps === ""){
			stepsArray = this.recipe.steps;
		}
		else{
			stepsArray = steps.split('\n');	
		}

		if(ingredients === ""){
			ingredientsArray = this.recipe.ingredients;
		}
		else{
			ingredientsArray = ingredients.split('\n');
		}

		//calls the Recipe Function editRecipe
  		this.recipeFunctions.editRecipe(this.recipe.name, name, description, ingredientsArray, stepsArray, this.recipe.comments);
  
  	}

}
