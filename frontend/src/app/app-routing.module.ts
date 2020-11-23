import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { ReactiveFormComponent } from './insurance-form/insurance-form.component';

const routes: Routes = [
  { path: 'form', component: ReactiveFormComponent },
  { path: 'list', component: InsuranceListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
