import { FormRoutingModule } from './form-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MaterialModule} from "../../modules/material/material.module"
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
