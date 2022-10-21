import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
  //TODO add logic to receive user data
export class NutritionService {
  constructor(private _httpClient: HttpClient) {}
  payload = { ingr: ['1 cup rice,', '10 oz chickpeas', '2 apples'] };

  postNutritionData() {
    return this._httpClient.post(
      'https://api.edamam.com/api/nutrition-details?app_key=3cc9f7cb1943ed9082b834a86a78e2c4&app_id=c7860c9d',
      this.payload
    );
  }
}
