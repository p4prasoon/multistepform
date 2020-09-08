import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-date-form-field',
  templateUrl: './date-form-field.component.html',
  styleUrls: ['./date-form-field.component.scss']
})
export class DateFormFieldComponent implements OnInit {

  constructor() { }

   @Input()data;
   @Input()formgroup:FormGroup;
   @Input()control;
   error;
   defaultValue;
   fromDate;

  ngOnInit(): void {
    this.control = this.formgroup.controls[this.data.control];
    this.defaultValue = this.data.attributes.find(ele => ele.attrId == '2')['defaultVal'];
  }
  updateValue(){

  }

}
