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

  constructor(private _nutritionService: NutritionService) {}

  ngOnInit(): void {
    this._nutritionService.nutritionsChange.subscribe(console.log);
  }
  ngOnDestroy() {
    this.nutritionSubscription?.unsubscribe();
  }
}
