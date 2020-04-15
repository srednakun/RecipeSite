import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {RECIPES} from './recipe-data';

/*
	This file contains functions that you can use with recipes.

*/

@Injectable()
export class RecipeFunctions {

	constructor() {}
	
	//gets all the recipes in the RECIPES array
	getAllRecipes(): Recipe[] {
		return RECIPES;
	}

	//adds a recipe to the beginning of the RECIPES array
	addRecipe(name, description, ingredients, steps): void {

		console.log("name: " + name);
		RECIPES.unshift(new Recipe(name, description, ingredients, steps));

		for (var index in RECIPES){
			//console.log(RECIPES[index]);
			console.log(RECIPES[index].name);
		}
	}
}