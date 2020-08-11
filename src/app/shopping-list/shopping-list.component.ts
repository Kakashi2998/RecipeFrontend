import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../classes/ingredient";
import {ShoppingService} from "../services/shopping.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Ingredient[];

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingService.getShoppingList().subscribe(
      (shoppingList: Ingredient[]) => {
        this.items = shoppingList;
      }
    )
  }

}
