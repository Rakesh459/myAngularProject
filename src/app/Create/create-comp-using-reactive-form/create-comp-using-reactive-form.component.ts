import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-comp-using-reactive-form',
  templateUrl: './create-comp-using-reactive-form.component.html',
  styleUrls: ['./create-comp-using-reactive-form.component.css']
})
export class CreateCompUsingReactiveFormComponent implements OnInit {

  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      firstname: [''],
      lastname: [''],
      skills: this.fb.group({
        skillName: [''],
        experience: [''],
        proficiency:['']
      })
    });
  }

  onClickSubmitButton(){
 console.log( this.employeeForm.value);
}
  
}
