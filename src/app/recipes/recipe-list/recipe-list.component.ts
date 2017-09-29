import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]= [
      new Recipe("A Test Recipe","Test Description","https://media-cdn.tripadvisor.com/media/photo-s/0a/a3/a2/bb/img-20160319-wa0007-largejpg.jpg"),
      new Recipe("A Test Recipe 2","Test Description 2","http://img.sndimg.com/food/image/upload/v1/img/recipes/11/11/69/picFjaYrD.jpg"),
];

  constructor() { }

  ngOnInit() {
  }

}
