import { DetailsModule } from './pages/details/details.module';
import { FormModule } from './pages/form/form.module';
import { ErrorModule } from './pages/error/error.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: 'form', loadChildren: () => FormModule },
  { path: 'details', loadChildren: () => DetailsModule },
  { path: 'error', loadChildren: () => ErrorModule },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
