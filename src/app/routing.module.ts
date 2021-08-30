import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchScreenComponent} from "./search-screen/search-screen.component"; // CLI imports router

const routes: Routes = [
  { path: 'search', component: SearchScreenComponent },
  { path: '',   redirectTo: '/search', pathMatch: 'full' }
];

// configures NgModule imports and exports
@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }) ],
  exports: [RouterModule]
})
export class RoutingModule { }
