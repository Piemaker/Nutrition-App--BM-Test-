import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormDataI } from './../../../../models/interfaces/interfaces';
import { NutritionService } from './../../../../services/nutrition.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../../../modules/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { FormComponent } from './form.component';
import { apiResponse } from 'src/app/common/resp';
import { Component, DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

fdescribe('FormComponent', () => {
  // Instead of adding material module we define an empty component for isolation
  @Component({
    selector: 'mat-spinner',
    template: '<div></div>',
  })
  class FakeMatSpinnerComponent {}
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let mockNutritionService: any;
  beforeEach(async () => {
    mockNutritionService = jasmine.createSpyObj(
      ['postNutritionData'],
      ['nutritionChange']
    );
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, ReactiveFormsModule, MaterialModule],
      declarations: [FormComponent, FakeMatSpinnerComponent],
      providers: [
        { provide: NutritionService, useValue: mockNutritionService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  describe('test non submit form functionality', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have analyze button disabled', () => {
      expect(de.query(By.css('button')).nativeElement.disabled).toBeTruthy();
    });

    it('should have textfield empty', () => {
      expect(de.query(By.css('textarea')).nativeElement.innerText).toBeFalsy();
    });
    it('should set ingredient field on initialization', () => {
      expect(component.ingredientsForm.get('ingredients')).toBeTruthy();
    });
  });

  // xit('should call postNutritionData one time and render the view', fakeAsync(() => {
  //   let router = de.injector.get(Router);
  //   spyOn(router, 'navigate').and.stub();
  //   const form = de.query(By.css('form'));
  //   const fnc = spyOn(component, 'onSubmit').and.callThrough();

  //   // const textfield = de.query(By.css('textarea')).nativeElement;
  //   // textfield.textContent = '1 cup rice';
  //   // expect(textfield.textContent).toBe('1 cup rice');
  //   component.ingredientsForm.setValue({
  //     ingredients: '1 cup rice',
  //   });
  //   fixture.detectChanges();
  //   form.triggerEventHandler('ngSubmit', { preventDefault: () => {} });

  //   expect(fnc).toHaveBeenCalled();
  //   expect(router.navigate).toHaveBeenCalledWith(['/details']);

  //   // const submitButton = de.query(By.css('button')).nativeElement;
  //   // fixture.detectChanges();

  //   // expect(submitButton.disabled).toBeFalsy()
  //   // submitButton.click();

  //   tick();
  //   expect(mockNutritionService.postNutritionData).toHaveBeenCalled();
  //   expect(mockNutritionService.postNutritionData.calls.all().length).toBe(1);
  // }));

  describe('test onSubmit functionality', () => {
    let form: any;
    let fnc: any;
    beforeEach(() => {
      form = de.query(By.css('form'));
      component.isLoading = false;
      component.ingredientsForm.setValue({
        ingredients: '1 cup rice',
      });
      fixture.detectChanges();
      fnc = spyOn(component, 'onSubmit').and.callThrough();
      form.triggerEventHandler('ngSubmit', { preventDefault: () => {} });
    });
    it('should set isLoading on submit', () => {
      expect(fnc).toHaveBeenCalled();
      expect(component.isLoading).toBe(true);
    });
    it('should call postNutritionData only once', () => {
      expect(mockNutritionService.postNutritionData).toHaveBeenCalledTimes(1);
    });
    it('should navigate to /details on success', fakeAsync(() => {
      let router = de.injector.get(Router);
      spyOn(router, 'navigate').and.stub();
      expect(router.navigate).toHaveBeenCalledWith(['/details']);
    }));
  });
});
