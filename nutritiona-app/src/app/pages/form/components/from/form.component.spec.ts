import { FormDataI } from './../../../../models/interfaces/interfaces';
import { NutritionService } from './../../../../services/nutrition.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './../../../../modules/material/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { apiResponse } from 'src/app/common/resp';
import { DebugElement } from '@angular/core';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let de: DebugElement;
  let service: NutritionService;
  let spy: jasmine.Spy;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      declarations: [FormComponent],
      providers: [NutritionService],
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    service = de.injector.get(NutritionService);
    spy = spyOn(service, 'postNutritionData').and.returnValue(of(apiResponse));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have analyze button disabled', () => {
    expect(de.query(By.css('button')).nativeElement.disabled).toBeTruthy();
  });

  it('should have textfield empty', () => {
    expect(de.query(By.css('textarea')).nativeElement.innerText).toBeFalsy();
  });

  it('should call postNutritionData one time and render the view', fakeAsync(() => {
    const form = de.query(By.css('form'));
    const fnc = spyOn(component, 'onSubmit');

    const textfield = de.query(By.css('textarea')).nativeElement;
    textfield.textContent = '1 cup rice';
    expect(textfield.textContent).toBe('1 cup rice');
    fixture.detectChanges();
    form.triggerEventHandler('ngSubmit', null);

    expect(fnc).toHaveBeenCalled();

    // const submitButton = de.query(By.css('button')).nativeElement;
    // fixture.detectChanges();

    // expect(submitButton.disabled).toBeFalsy()
    // submitButton.click();

    tick();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.all().length).toBe(1);
  }));

  it(`should call postNutritionData one time and render the view '`, () => {
    // let payload: FormDataI = { ingr: ['1 cup rice'] };
    // service.postNutritionData({formData : payload})
    // component.onSubmit()
    // expect(spy).toHaveBeenCalled();
    // expect(spy.calls.all().length).toBe(1);
  });
});
