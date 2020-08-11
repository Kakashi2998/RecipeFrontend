import {Component, OnInit} from '@angular/core';
import {Recipe} from "./classes/recipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  recepie: Recipe;


  ngOnInit(): void {

  }


}
