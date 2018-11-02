import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Employee } from '../Employee';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
 
  datePickerConfig : Partial<BsDatepickerConfig>;
  employee: Employee = new Employee();
  
  constructor() { 
    this.employee.name = "";
    this.employee.dateofbirth = null;
  }

  ngOnInit() {
    this.datePickerConfig = Object.assign({},
      {
        showWeekNumbers: false,
        maxDate : new Date(2000, 10, 30),
        minDate :new Date(1994, 10, 30),
        containerClass: "theme-orange",
        dateInputFormat: "DD/MM/YYYY"
      },
      
      );
  }

  onClickSubmitButton(){
    alert("submitted ra puka");
    console.log(this.employee.dateofbirth);
  }



}
