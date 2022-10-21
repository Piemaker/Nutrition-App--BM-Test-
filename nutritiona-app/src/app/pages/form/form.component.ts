import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  payload = { ingr: ['1 cup rice,', '10 oz chickpeas', '2 apples'] };

  constructor(private _nutritionService: NutritionService) {
    _nutritionService.postNutritionData(this.payload).subscribe(console.log);
  }

  ngOnInit(): void {}
}
