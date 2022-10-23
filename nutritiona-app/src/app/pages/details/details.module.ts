import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { ListComponent } from './list/list.component';
import { FactsComponent } from './facts/facts.component';


@NgModule({
  declarations: [
    DetailsComponent,
    ListComponent,
    FactsComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
