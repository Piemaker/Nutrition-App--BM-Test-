import { By } from '@angular/platform-browser';
import { NutritionService } from './../../../../services/nutrition.service';
import { Component, DebugElement, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { apiResponse } from 'src/app/common/resp';
import { of } from 'rxjs';

fdescribe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let service: NutritionService;
  let spy: jasmine.Spy;
  beforeEach(async () => {
    
    // This is used to isolate each component
    @Component({
      selector: 'app-list',
      template: '<div></div>',
    })
    class FakeAppList {
      @Input() ingredients: any;
    }
    @Component({
      selector: 'app-facts',
      template: '<div></div>',
    })
    class FakeAppFacts {}
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [DetailsComponent, FakeAppFacts, FakeAppList],
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
