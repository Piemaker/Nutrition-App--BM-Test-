import { spyPropertyGetter } from 'src/app/common/helper';
import { ResponseI } from './../../../../models/interfaces/interfaces';
import { By } from '@angular/platform-browser';
import { NutritionService } from './../../../../services/nutrition.service';
import { Component, DebugElement, Input } from '@angular/core';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { apiResponse } from 'src/app/common/resp';
import { of, BehaviorSubject } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let de: DebugElement;
  let mockNutritionService: jasmine.SpyObj<NutritionService>;

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
      imports: [],
      declarations: [DetailsComponent, FakeAppFacts, FakeAppList],
      providers: [],
    });
  });
  describe('when data is not supplied', () => {
    beforeEach(() => {
      mockNutritionService = jasmine.createSpyObj(
        { postNutritionData: of(apiResponse) },
        { nutritionsChange: new BehaviorSubject<ResponseI | any>({}) }
      );
      TestBed.overrideProvider(NutritionService, {
        useValue: mockNutritionService,
      }).compileComponents();
      fixture = TestBed.createComponent(DetailsComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
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
  describe('When data is supplied', () => {
    beforeEach(() => {
      mockNutritionService = jasmine.createSpyObj(
        { postNutritionData: of(apiResponse) },
        { nutritionsChange: new BehaviorSubject<ResponseI | any>(apiResponse) }
      );
      TestBed.overrideProvider(NutritionService, {
        useValue: mockNutritionService,
      }).compileComponents();
      fixture = TestBed.createComponent(DetailsComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      fixture.detectChanges(); //! This freezes the providers object so you can't mutate it with overrideProvider or changing the property of the mock
    });
    it(`should set data on initialization if data has changed'`, () => {
      fixture.detectChanges();
      expect(mockNutritionService.nutritionsChange.value).toEqual(apiResponse);
      expect(component.data).toEqual(apiResponse);
      expect(de.query(By.css('.container'))).toBeTruthy();
    });
  });
});
