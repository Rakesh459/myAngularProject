import { CanDeactivate } from "@angular/router";
import { CreateCompUsingReactiveFormComponent } from "./create-comp-using-reactive-form.component";
import { Injectable } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { ModalViewComponent } from "../../modal-view/modal-view.component";
import { Subject } from "rxjs";

@Injectable()
export class CanDeactiveRouteGuardForCreateReactive implements CanDeactivate<CreateCompUsingReactiveFormComponent> {

    bsModalRef: BsModalRef;
    constructor(private modalService: BsModalService) {   }

    canDeactivate(component: CreateCompUsingReactiveFormComponent) {

        if (component.employeeForm.dirty) {
            const subject = new Subject<boolean>();
            const initialState = {
                list: [
                  'Form is not submitted yet',
                  'Are you sure Do you want to Leave the page?'
                ],
                title: 'Confirmation For Leaving'
              };
              this.bsModalRef = this.modalService.show(ModalViewComponent, {initialState});
              this.bsModalRef.content.subject = subject;
            return subject.asObservable();
        } else {
            return true;
        }
    }

}