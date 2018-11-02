import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './Create/create-component/create-component.component';
import { CustomValidatorDirective } from './Create/date-custom-validator';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponentComponent,
    CustomValidatorDirective  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
