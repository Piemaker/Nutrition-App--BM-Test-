import { ResponseI, Parsed, FactList } from './../../models/interfaces';
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
  data!: ResponseI;

  constructor(private _nutritionService: NutritionService) {}
  ngOnInit(): void {
    this._nutritionService.nutritionsChange.subscribe((data: ResponseI) => {
      if (Object.keys(data).length === 0) {
        return;
      }
      this.data = data;
      data.ingredients.map((ingredient) => {
        this.ingredientList.push(ingredient.parsed[0]);
      });
    });
    // resp.ingredients.map((ingredient) => {
    //   this.ingredientList.push(ingredient.parsed[0]);
    // });
    // resp.totalNutrientsKCal.ENERC_KCAL;
  }
  ngOnDestroy() {
    this.nutritionSubscription?.unsubscribe();
  }
}
