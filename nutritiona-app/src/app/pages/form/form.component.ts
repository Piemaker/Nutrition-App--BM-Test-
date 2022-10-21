import { NutritionService } from './../../services/nutrition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private _nutritionService: NutritionService) { 
    _nutritionService.postNutritionData().subscribe(console.log)
  }

  ngOnInit(): void {
  }

}
