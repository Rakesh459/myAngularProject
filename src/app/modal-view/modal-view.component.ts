import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.css']
})
export class ModalViewComponent implements OnInit {

  title: string;
  list: any[] = [];
  subject: Subject<boolean>;
  

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  action(value: boolean) {
    this.bsModalRef.hide();
    this.subject.next(value);
    this.subject.complete();
  }

}
