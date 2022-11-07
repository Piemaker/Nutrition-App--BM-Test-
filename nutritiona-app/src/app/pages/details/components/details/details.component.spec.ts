import { By } from '@angular/platform-browser';
import { NutritionService } from './../../../../services/nutrition.service';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { apiResponse } from 'src/app/common/resp';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let service: NutritionService;
  let spy: jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailsComponent],
      providers: [NutritionService],
    }).compileComponents();
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(NutritionService);
    spy = spyOn(service, 'postNutritionData').and.returnValue(of(apiResponse));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`shouldn't render the container component without data '`, () => {
    expect(de.query(By.css('.container'))).toBeFalsy();
  });
  it(`should toggle the Show/All Nutrition button '`, () => {
    expect(component.isShowFacts).toBeFalsy();
    component.toggleFacts();
    expect(component.isShowFacts).toBeTruthy();
  });
  it(`should render container when data is present '`, () => {
    component.data = apiResponse;
    fixture.detectChanges(); // Must detect changes otherwise it won't pass

    expect(de.query(By.css('.container'))).toBeTruthy();
  });
});
