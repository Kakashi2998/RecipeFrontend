import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShoppingService} from "../../services/shopping.service";
import {Ingredient} from "../../classes/ingredient";

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {

  shoppingForm: FormGroup;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(1, Validators.min(1))
    });
  }
  onSubmit(){
    if(this.shoppingForm.invalid){
      this.shoppingForm.markAllAsTouched();
      return;
    }
    const item = new Ingredient(this.shoppingForm.get('name').value, this.shoppingForm.get('amount').value)
    this.shoppingService.updateOrAdd(item);
    this.shoppingForm.reset({
      'amount': 1
    })
  }

}
