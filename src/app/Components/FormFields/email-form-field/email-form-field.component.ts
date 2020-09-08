import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-email-form-field',
  templateUrl: './email-form-field.component.html',
  styleUrls: ['./email-form-field.component.scss']
})
export class EmailFormFieldComponent implements OnInit {

  constructor() { }

   @Input()data;
   @Input()formgroup:FormGroup;
   control;
   acceptType;
  ngOnInit(): void {
    this.control = this.formgroup.controls[this.data.control];
    let attribute = this.data.validators.find(attr => attr.attrId === 1);
   this.acceptType = attribute ? attribute['inpinputAcceptut'] : '';  //default case accept both
  }
  updateValue(){

  }
  alphaNumeric(event) {
    let key = event.keyCode;
    if(this.acceptType == 0){
      return ((key >= 65 && key <= 90) || key == 8 || key == 9);
    } else if(this.acceptType == 1){
      return ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || key == 8 || key == 9);
    }
  }

}
