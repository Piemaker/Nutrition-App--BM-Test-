import { apiResponse } from './../common/resp';
import { environment } from './../../environments/environment';
import { FormDataI } from './../models/interfaces/interfaces';
import { TestBed } from '@angular/core/testing';
import { NutritionService } from './nutrition.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('NutritionService', () => {
  let service: NutritionService;
  let httpTestingController: HttpTestingController;
  const formData: FormDataI = {
    ingr: ['1 cup rice'],
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NutritionService],
    });
    service = TestBed.inject(NutritionService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have postNutritionData function', () => {
    expect(service.postNutritionData).toBeTruthy();
  });
  it(`should make a single call to ${environment.BASE_URL}/details ,when postNutritionData is called`, () => {
    service.postNutritionData({ formData }).subscribe((apiData) => {}); // you must subscribe in order to execute the function
    const request = httpTestingController.expectOne(
      `${environment.BASE_URL}/nutrition-details`
    );
    request.flush(apiResponse);
    expect(request.request.method).toBe('POST');
  });
  it('should return correct details data when postNutritionData is called', () => {
    service.postNutritionData({ formData }).subscribe((apiData) => {
      expect(apiData).toEqual(apiResponse);
    }); // you must subscribe in order to execute the function
    const request = httpTestingController.expectOne(
      `${environment.BASE_URL}/nutrition-details`
    );
    request.flush(apiResponse);
  });
});
