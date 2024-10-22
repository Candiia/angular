import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes: Routes = [
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
