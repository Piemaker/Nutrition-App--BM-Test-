import { ResponseI } from '../models/interfaces/interfaces';
import { FormDataI } from '../models/interfaces/interfaces';
import { environment } from './../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  nutritionsChange = new BehaviorSubject<ResponseI | any>({});

  constructor(private _httpClient: HttpClient) { }
  

  postNutritionData({
    formData,
  }: {
    formData: FormDataI;
  }): Observable<ResponseI> {
    debugger
    return this._httpClient.post<ResponseI>(
      `${environment.BASE_URL}/nutrition-details`,
      formData
    );
  }
}
