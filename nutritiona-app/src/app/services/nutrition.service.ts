import { FormDataI } from './../models/formData';
import { environment } from './../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  nutritionsChange = new BehaviorSubject<any | null>({});

  constructor(private _httpClient: HttpClient) {}
  postNutritionData(formData: FormDataI) {
    return this._httpClient.post(environment.BASE_URL, formData);
  }
}
