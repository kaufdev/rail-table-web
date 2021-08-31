import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchScreenComponent} from "./search-screen/search-screen.component";
import {CheckTicketComponent} from "./check-ticket/check-ticket.component"; // CLI imports router

const routes: Routes = [
  { path: 'search', component: SearchScreenComponent },
  { path: 'check', component: CheckTicketComponent},
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  { path: '**', redirectTo: '/search'}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  }) ],
  exports: [RouterModule]
})
export class RoutingModule { }
