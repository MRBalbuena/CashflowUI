import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovementComponent } from './movements/movement-container/movement/movement.component';
import { NgbDateCustomParserFormatter } from './common/NgbDateCustomParserFormatter';
import { MovementContainerComponent } from './movements/movement-container/movement-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MovementComponent,
    MovementContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}],
  bootstrap: [AppComponent]
})
export class AppModule { }
