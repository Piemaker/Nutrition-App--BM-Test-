import { ResponseI, Parsed, resp } from './../../models/interfaces';
import { Subscription } from 'rxjs';
import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  nutritionSubscription: Subscription | undefined;
  ingredientList: Parsed[] = [];

  constructor(private _nutritionService: NutritionService) {}
  ngOnInit(): void {
    // this._nutritionService.nutritionsChange.subscribe((data: ResponseI) => {
    //   if (Object.keys(data).length === 0) {
    //     return;
    //   }
    //   data.ingredients.map((ingredient) => {
    //     this.ingredientList.push(ingredient.parsed[0]);
    //   });
    // });
    resp.ingredients.map((ingredient) => {
        this.ingredientList.push(ingredient.parsed[0]);
      });

  }
  ngOnDestroy() {
    this.nutritionSubscription?.unsubscribe();
  }
}
