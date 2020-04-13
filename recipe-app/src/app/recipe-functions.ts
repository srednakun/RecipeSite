import {Injectable} from '@angular/core';
import {Recipe} from './recipe';
import {RECIPES} from './recipe-data';

/*
	This file contains functions that you can use with recipes.

*/

@Injectable()
export class RecipeFunctions {

	constructor() {}
	
	getAllRecipes(): Recipe[] {
		return RECIPES;
	}
}