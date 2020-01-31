import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovementComponent } from './movements/movement-container/movement/movement.component';


const routes: Routes = [
  { path: 'movements', component: MovementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
