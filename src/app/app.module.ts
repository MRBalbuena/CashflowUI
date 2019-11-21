import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MovementsComponent } from './movements/movements.component';
import { NgbDateCustomParserFormatter } from './common/NgbDateCustomParserFormatter';

@NgModule({
  declarations: [
    AppComponent,
    MovementsComponent
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
