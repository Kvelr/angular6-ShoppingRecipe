import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recepies: Recipe[] = [
    new Recipe('A test recpie', 'this is simply a test',
      'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg'),
      new Recipe('A test recpie', 'this is simply a test',
      'https://www.inspiredtaste.net/wp-content/uploads/2012/02/Easy-Chicken-Ragu-1200.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
