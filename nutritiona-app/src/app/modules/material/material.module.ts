import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const MATERIAL = [
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatButtonModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [MATERIAL],
  exports: [MATERIAL],
})
export class MaterialModule {}
