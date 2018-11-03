import { Component, OnInit } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker'
import { Employee, RecapResponse } from '../Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-component',
  templateUrl: './create-component.component.html',
  styleUrls: ['./create-component.component.css']
})
export class CreateComponentComponent implements OnInit {
 
  datePickerConfig : Partial<BsDatepickerConfig>;
  employee: Employee = new Employee();
  success:boolean;
  constructor(private _http: HttpClient) { 
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

    this._http.post<RecapResponse>('https://www.google.com/recaptcha/api/siteverify?secret=6Lcff3gUAAAAAFnoLjYiByMnbclXhQ40ymAlw1qt&response='+this.employee.recaptcha,null)
                    .subscribe(emp => {if( emp.success){
                      alert("submitted ra puka");
                  console.log(this.employee);
                } else{
                  alert("not submitted ra puka");
                }
                    }
                      
                      )
    
  }



}
