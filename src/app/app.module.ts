import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { HttpClientModule } from '@angular/common/http'

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
    BsDatepickerModule.forRoot(),
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: { siteKey: '6Lcff3gUAAAAAKrYHorQA1tPQdLBXSM-pLN3jfyk' } as RecaptchaSettings,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
