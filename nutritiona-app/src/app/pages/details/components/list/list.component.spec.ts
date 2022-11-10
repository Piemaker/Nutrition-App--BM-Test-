import { Sort } from '@angular/material/sort';
import { ingredients } from './../../../../common/resp';
import { Parsed } from 'src/app/models/interfaces/interfaces';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { parsed } from 'src/app/common/resp';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;
  const sortOptions = ['Qty', 'Unit', 'Food', 'Calories', 'Weight'];
  const ascSort: Sort = {
    active: 'Qty',
    direction: 'asc',
  };
  const decSort: Sort = {
    active: 'Qty',
    direction: 'desc',
  };
  const unspecifiedSort: Sort = {
    active: '',
    direction: '',
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the first food field correctly', () => {
    component.ingredients = parsed;
    fixture.detectChanges();

    expect(de.query(By.css('#table-f-0')).nativeElement.textContent).toEqual(
      parsed[0].food
    );
  });
  it('should sort table in correct asc order', () => {
    component.ingredients = ingredients;
    fixture.detectChanges();
    sortOptions.forEach((opt) => {
      ascSort.active = opt;
      component.sortData(ascSort);
      fixture.detectChanges();
      const currentOpt = opt === 'Qty' ? 'quantity' : opt.toLowerCase();
      console.log(currentOpt);
      switch (currentOpt) {
        case 'quantity':
          expect(component.ingredients[0][currentOpt as keyof Parsed]).toBe(1);

          break;
        case 'unit':
          expect(component.ingredients[0].measure).toBe('cup');

          break;

        case 'food':
          expect(component.ingredients[0][currentOpt as keyof Parsed]).toBe(
            'onions'
          );

          break;

        case 'calories':
          expect(component.ingredients[0].nutrients.ENERC_KCAL.quantity).toBe(
            328.02
          );

          break;

        case 'weight':
          expect(component.ingredients[0][currentOpt as keyof Parsed]).toBe(
            195
          );

          break;
      }
    });
  });
  it('should return the data in descending order when active is set desc', () => {
    component.ingredients = ingredients;
    fixture.detectChanges();
    component.sortData(decSort);
    fixture.detectChanges();
    expect(component.ingredients[0].quantity).toBe(10);
  });
  it('should return the same data if no sort option is selected nor an order', () => {
    component.ingredients = ingredients;
    fixture.detectChanges();
    component.sortData(unspecifiedSort);
    fixture.detectChanges();
    expect(component.ingredients[0].quantity).toBe(1);
  });
});
