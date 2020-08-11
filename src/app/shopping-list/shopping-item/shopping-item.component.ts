import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {

  @Input() ingredient: Ingredient;

  constructor() { }

  ngOnInit(): void {
  }

}
