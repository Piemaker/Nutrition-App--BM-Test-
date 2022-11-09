import { NutritionService } from './../../../../services/nutrition.service';

import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Parsed, ResponseI } from 'src/app/models/interfaces/interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  nutritionSubscription: Subscription | undefined;
  ingredientList: Parsed[] = [];
  data!: ResponseI;
  isShowFacts = false;
  constructor(private _nutritionService: NutritionService) {}
  ngOnInit(): void {
    this._nutritionService.nutritionsChange.subscribe((data: ResponseI) => {

      if (Object.keys(data).length === 0) {
        return;
      }
      // FACTS DATA
      this.data = data;

      // LIST DATA
      // minimize drilled data to avoid unnecessary children rendering
      data.ingredients.map((ingredient) => {
        this.ingredientList.push(ingredient.parsed[0]);
      });
    });
  }
  toggleFacts() {
    this.isShowFacts = !this.isShowFacts;
  }
  ngOnDestroy() {
    this.nutritionSubscription?.unsubscribe();
  }
}
