/*
Recipe class

A recipe has a name, description, ingredients, and steps to follow.

*/

export class Recipe {

	name: string;
	description: string;
	ingredients: Array<string>;
	steps: Array<string>;

	constructor(recipeName, recipeDescription, recipeIngredients, recipeSteps){

		this.name = recipeName;
		this.description = recipeDescription;
		this.ingredients = recipeIngredients;
		this.steps = recipeSteps;

	}
	


}

