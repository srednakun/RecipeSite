import { Component, OnInit } from '@angular/core';

//import recipe class and recipeFunctions 
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})

export class AddRecipeFormComponent {

	//add this so I can use functions from { RecipeFunctions }
	constructor(private recipeFunctions: RecipeFunctions) { }

	ngOnInit(): void {
	}


	/* when the form is submitted, this function is called
	It takes the data from the form and uses it to add a new
	recipe to the list.
	*/
	onSubmit(formInfo: NgForm){

	//get recipe info from the user
	var name = formInfo.value.name;
	var description = formInfo.value.description;
	var ingredients = formInfo.value.ingredients;
	var steps = formInfo.value.steps;

	//turn ingredients and steps into string Array based on new line
	let ingredientsArray = ingredients.split('\n');
	let stepsArray = steps.split('\n'); 	

	//add the new recipe to the list
	this.recipeFunctions.addRecipe(name, description, ingredientsArray, stepsArray);

	//hide the form
	

	
	}

}
