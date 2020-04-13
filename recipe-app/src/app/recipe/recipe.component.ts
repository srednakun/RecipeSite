import { Component, OnInit } from '@angular/core';

//import recipe class and recipeFunctions 
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
