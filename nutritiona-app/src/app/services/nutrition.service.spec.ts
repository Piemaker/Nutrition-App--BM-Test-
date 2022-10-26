import { TestBed } from '@angular/core/testing';
import { NutritionService } from './nutrition.service';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';

describe('NutritionService', () => {
  let service: NutritionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NutritionService],
    });
    service = TestBed.inject(NutritionService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

   it('should have postNutritionData function', () => {
     const service: NutritionService = TestBed.get(NutritionService);
     expect(service.postNutritionData).toBeTruthy();
   });
});
