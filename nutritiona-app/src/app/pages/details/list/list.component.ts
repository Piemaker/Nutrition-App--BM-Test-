import { Parsed } from './../../../models/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() ingredients: Parsed[] = [];
  constructor() {}

  ngOnInit(): void {
    console.log(
      '🚀 ~ file: list.component.ts ~ line 13 ~ ListComponent ~ constructor ~ this.ingredients',
      this.ingredients
    );
  }
  sortData(sort: Sort) {
    console.log("🚀 ~ file: list.component.ts ~ line 20 ~ ListComponent ~ sortData ~ sort", sort)
    const data = this.ingredients.slice();
    if (!sort.active || sort.direction === '') {
      this.ingredients = data;
      return;
    }

    this.ingredients = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'Qty':
          return this.compare(a.quantity, b.quantity, isAsc);
        case 'Unit':
          return this.compare(a.measure, b.measure, isAsc);
        case 'Food':
          return this.compare(a.food, b.food, isAsc);
        case 'Calories':
          return this.compare(
            a.nutrients.ENERC_KCAL.quantity,
            b.nutrients.ENERC_KCAL.quantity,
            isAsc
          );
        case 'Weight':
          return this.compare(a.weight, b.weight, isAsc);
        default:
          return 0;
      }
    });
  }
  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
