import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './Create/create-component/create-component.component';
import { CustomValidatorDirective } from './Create/date-custom-validator';
import { CreateCompUsingReactiveFormComponent } from './Create/create-comp-using-reactive-form/create-comp-using-reactive-form.component';
import { PageNotFoundComponent } from './Error/page-not-found.component';

const approutes: Routes = [
    { path: 'createtemplateform', component: CreateComponentComponent },
    { path: 'createreactiveform', component: CreateCompUsingReactiveFormComponent },
    {path:'',redirectTo:'/createreactiveform',pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }];

@NgModule({
    declarations: [
        AppComponent,
        CreateComponentComponent,
        CustomValidatorDirective,
        CreateCompUsingReactiveFormComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        HttpClientModule,
        RouterModule.forRoot(approutes),
        ReactiveFormsModule
    ],
    providers: [{
        provide: RECAPTCHA_SETTINGS,
        useValue: { siteKey: '6Lcff3gUAAAAAKrYHorQA1tPQdLBXSM-pLN3jfyk' } as RecaptchaSettings,
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
