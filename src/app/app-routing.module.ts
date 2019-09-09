import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { TermsComponent } from "./terms/terms.component";



const routes: Routes = [
  {
    path: '',
    children: [
     {
      path: '',
      component: TermsComponent
     },
     {
      path: 'booking',
      loadChildren: './booking/booking.module#BookingModule'
     }
    ]
  },
  {  path: '**', redirectTo: 'booking' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
