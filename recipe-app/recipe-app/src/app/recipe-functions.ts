//These are the functions that are used to make changes to the list of recipes and recipes in the list.

import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {RECIPES} from './recipe-data';


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
		RECIPES.unshift(new Recipe(name, description, ingredients, steps, null));

		for (var index in RECIPES){
			//console.log(RECIPES[index]);
			console.log(RECIPES[index].name);
		}
	}

	//edits an existing recipe after finding it by name
	editRecipe(editRecipeName, name, description, ingredients, steps, comments): void{
		
		//loop through the list of recipes
		for(var i = 0; i < RECIPES.length; i++){

			//if the recipe in the list matches the old name of the recipe we are editing...
			if(RECIPES[i].name === editRecipeName){

				//...then replace the existing recipe with the new information
				RECIPES[i] = new Recipe(name, description, ingredients, steps, comments)
			}
		}
	}

	//adds a comment to the top of the comment list for an existing recipe
	addComment(currentRecipeName, comment): void{

		//loop through the list of recipes
		for(var i = 0; i < RECIPES.length; i++){

			//if the recipe in the list matches the name of the recipe we are adding a comment to...
			if(RECIPES[i].name === currentRecipeName){
				
				//...then add the comment to that recipe
				RECIPES[i].comments.push(comment)
			}
		}
	}
}