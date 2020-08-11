import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../classes/ingredient";
import {ShoppingService} from "../../services/shopping.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() ingredient: Ingredient;
  @Input() index: number;
  @Input() deletable: boolean

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onDelete(){
    if(confirm('Deleting Item: ' + this.ingredient.name))
      this.shoppingService.removeItem(this.index);
  }
}
