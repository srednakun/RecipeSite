/*
Recipe class

A recipe has a name, description, ingredients, and steps to follow.

*/

export class Recipe {

	name: string;
	description: string;
	ingredients: Array<string>;
	steps: Array<string>;
	comments: Array<string>;

	constructor(recipeName, recipeDescription, recipeIngredients, recipeSteps, recipeComments){

		this.name = recipeName;
		this.description = recipeDescription;
		this.ingredients = recipeIngredients;
		this.steps = recipeSteps;
		this.comments = recipeComments

	}
	


}

