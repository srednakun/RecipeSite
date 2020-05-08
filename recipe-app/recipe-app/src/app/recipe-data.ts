import {Recipe } from './recipe';

//Default recipes
/*
*Copy and paste lines 6-14 before the comment at the bottom of this page to add a new recipe
,

{
	name: ''
	description: ''
	ingredients: []
	steps: []
	comments: []
}

*/

export const RECIPES: Recipe[] = [

	{
		name: 'Japanese Chicken Curry',
		description: 'This delicious chicken curry contains tender pieces of chicken, potatoes, and carrots.',
		ingredients: ['4 cubes of mild Japanese curry roux', '5 cups of water', ' l lb chicken', '4 medium potatoes', 
			' 1/2 cup carrots', ' 1/2 large sweet onion', 'salt, pepper, and garlic powder to taste'],
		steps: ['Dice onion and cut chicken into bite sized pieces', 
			'Grease pan, turn to medium-high heat, then add onions and chicken, season with salt, pepper, and garlic powder.', 
			'While chicken is cooking, cut potatoes and carrots into bit sized peices.',
			'Cook until chicken is cooked through then set aside', 
			'In same pan, grease, then add potatoes',
			'Season with salt and pepper',
			'Cook potatoes for 5 min to develop some browning then add water and curry roux',
			'Whisk in roux until completely dissolved',
			'Allow to boil for 10-15 min or until potatoes are cooked through',
			'Add carrots in the last 5 minutes of cooking',
			'Add onion and chicken mixture',
			'Your Japanese Chicken Curry is ready to serve!'],
		comments: ["Wow, thats good Chicken!"]
	},

	{
		name: 'Good Old Fashioned Pancakes',
		description: 'This is a great recipe that I found in my Grandma\'s recipe book. Judging from the weathered look of this recipe card, this was a family favorite.',
		ingredients: ['1 1/2 cups all-purpose flour', '3 1/2 teaspoons baking powder', '1 teaspoon salt', '1 tablespoon white sugar',
			'1 1/4 cups milk', '1 egg', '3 tablespoons butter, melted'],
		steps: ['In a large bowl, sift together the flour, baking powder, salt and sugar.', 
			'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
			'Heat a lightly oiled griddle or frying pan over medium high heat.',
			'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.', 
			'Brown on both sides and serve hot. '],
		comments: ["My favorite two things, old and fashioned."]

	},//Paste new recipe format here
	{
	name: 'Chicago Style Pizza',
	description: 'The best pizza!',
	ingredients: ['1 lb pizza dough', '1 lb italian sausage', '2 cups shredded mozarella', '1 small onion', '2 tsp olive oil', '1 cup pizza sauce' ],
	steps: [' Preheat oven to 350 degrees.', 'Place dough in pan and raise the edges to make it a deep dish shape.', 'Combine sausage and onions into a large skillet over medium heat.', 'Spoon sauce over dough along with sausage and cheese.', 'Brush olive oil over crust.', 'Bake for 25 minutes'],
	comments: ['I like this recipe but next time I will add pepperoni and mushrooms.']
}

]; 

