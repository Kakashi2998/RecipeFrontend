import { Injectable } from '@angular/core';
import {Ingredient} from "../classes/ingredient";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private shoppingList: Ingredient[] = []

  constructor() { }

  addToShoppingList(items: Ingredient[]){
    items.forEach(item => {
      this.updateOrAdd(item);
    })
  }

  getShoppingList(){
    return new Observable((subscriber => {
      subscriber.next(this.shoppingList);
    }))
  }

  updateOrAdd(item: Ingredient){
    let found = false;
    this.shoppingList.forEach(listItem => {
      if(listItem.name === item.name) {
        listItem.amount += item.amount;
        found = true;
      }
    })
    if(!found)
      this.shoppingList.push(item);
  }

  removeItem(index: number){
    this.shoppingList.splice(index, index+1)
  }
}

