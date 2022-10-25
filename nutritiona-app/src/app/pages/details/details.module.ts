import { DetailsRoutingModule } from './details-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FactsComponent } from './components/facts/facts.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { ListComponent } from './components/list/list.component';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
  declarations: [DetailsComponent, ListComponent, FactsComponent],
  imports: [CommonModule, DetailsRoutingModule, MaterialModule],
})
export class DetailsModule {}
