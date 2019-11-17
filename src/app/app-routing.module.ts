import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './movements/movements.component';


const routes: Routes = [
  { path: 'movements', component: MovementsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
