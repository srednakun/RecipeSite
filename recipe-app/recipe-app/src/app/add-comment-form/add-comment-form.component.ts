//add-comment-form.component is a child of recipe.component. It is responsible for creating an input box to recive a comment from the user, and commit that comment to the recipe.

import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeFunctions } from '../recipe-functions';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-add-comment-form',
  templateUrl: './add-comment-form.component.html',
  styleUrls: ['./add-comment-form.component.css']
})
export class AddCommentFormComponent implements OnInit {

	@Input() recipe: Recipe;
  
	constructor(private recipeFunctions: RecipeFunctions) { }

  ngOnInit(): void {
  }

  onSubmit(formInfo: NgForm){

    //takes the info from the input box
    var comment = formInfo.value.comment;
    
    //excute the Recipe Function addComment
    this.recipeFunctions.addComment(this.recipe.name, comment);
    
    }

}
