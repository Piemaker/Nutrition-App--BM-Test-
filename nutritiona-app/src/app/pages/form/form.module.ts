import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "../../modules/material/material.module"
import { FormComponent } from './components/from/form.component';
@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    FormRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class FormModule {}
