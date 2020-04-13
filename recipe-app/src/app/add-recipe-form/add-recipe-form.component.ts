import { Component, OnInit } from '@angular/core';

//import recipe class and recipeFunctions 
import { Recipe } from '../recipe';
import { RecipeFunctions } from '../recipe-functions';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-recipe-form',
  templateUrl: './add-recipe-form.component.html',
  styleUrls: ['./add-recipe-form.component.css']
})
export class AddRecipeFormComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
