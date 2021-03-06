import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RecaptchaModule, RecaptchaSettings, RECAPTCHA_SETTINGS } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule, BsModalService }  from 'ngx-bootstrap/modal'

import { AppComponent } from './app.component';
import { CreateComponentComponent } from './Create/create-component/create-component.component';
import { CustomValidatorDirective } from './Create/date-custom-validator';
import { CreateCompUsingReactiveFormComponent } from './Create/create-comp-using-reactive-form/create-comp-using-reactive-form.component';
import { PageNotFoundComponent } from './Error/page-not-found.component';
import { ModalViewComponent } from './modal-view/modal-view.component';
import { CanDeactiveRouteGuardForCreateReactive } from './Create/create-comp-using-reactive-form/can-deactivate-routeguard-createreactive';

const approutes: Routes = [
    { path: 'createtemplateform', component: CreateComponentComponent },
    {
        path: 'createreactiveform', component: CreateCompUsingReactiveFormComponent,
        canDeactivate: [CanDeactiveRouteGuardForCreateReactive]
    },
    { path: '', redirectTo: '/createreactiveform', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }];

@NgModule({
    declarations: [
        AppComponent,
        CreateComponentComponent,
        CustomValidatorDirective,
        CreateCompUsingReactiveFormComponent,
        PageNotFoundComponent,
        ModalViewComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BsDatepickerModule.forRoot(),
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        HttpClientModule,
        RouterModule.forRoot(approutes),
        ReactiveFormsModule,
        ModalModule.forRoot()
    ],
    entryComponents: [ModalViewComponent],
    providers: [{
        provide: RECAPTCHA_SETTINGS,
        useValue: { siteKey: '6Lcff3gUAAAAAKrYHorQA1tPQdLBXSM-pLN3jfyk' } as RecaptchaSettings,
    },
        CanDeactiveRouteGuardForCreateReactive],
    bootstrap: [AppComponent]
})
export class AppModule { }
