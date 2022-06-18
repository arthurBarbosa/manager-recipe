import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  @Output() recipeSeleted = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelected() {
    this.recipeSeleted.emit()
  }
}
