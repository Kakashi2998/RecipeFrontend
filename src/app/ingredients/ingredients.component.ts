import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../classes/ingredient";

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() ingredients: Ingredient[]
  @Input() deletable: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
