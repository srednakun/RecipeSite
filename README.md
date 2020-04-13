# RecipeSite
## CSCI 313 Team Project

### Authors
Sredna, Kyle, and Nathan<br>
### Date: 
April 2020<br>

### Summary 
Personal webpage where someone is blogging their own favorite recipes. Single page application. 

## Programs
Front End - Angular <br>
Styling - Bootstrap <br>

## To Open
Navigate to "recipe-app" folder using terminal, then type "ng serve --open"<br>
This will automatically open the app in the browser at http://localhost:4200/<br>

## Styling Info
Bootstrap has been added to the project folder and is imported globally in styles.css. <br>
It can be used in html files by writing bootstrap code. See "app.component.html" for example.<br>

## File Info
-"recipe.ts"(located in src/app) - contains recipe class. A recipe has a name, description, ingredients, and steps to follow.<br>
-"recipe.data.ts"(located in src/app) - contains default recipes. When the user loads the page, these are the recipes they see. <br>
-"recipe.functions.ts"(located in src/app) - This file contains functions that you can use with recipes. <br>
-"app.module.ts"- Updated to include "RecipeFunctions". <br>

## Sources
Add Bootstrap to Project - https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/<br>
Create Angular App Basics - https://code.tutsplus.com/tutorials/creating-your-first-angular-app-basics--cms-30092<br>
Storing and Accessing Data Angular - https://code.tutsplus.com/tutorials/create-your-first-angular-app-storing-and-accessing-data--cms-30098<br>
Creating components Part1 - https://code.tutsplus.com/tutorials/creating-your-first-angular-app-components-part-1--cms-30113<br>
