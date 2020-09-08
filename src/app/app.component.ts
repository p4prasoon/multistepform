import {Component, OnInit,ChangeDetectorRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { MatStepper } from '@angular/material/stepper';
import { UtilService } from "./util.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AppComponent {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  data;
  isCompleted = false;
  formData = {
    'firstCtrl':'',
    'lastCtrl':'',
    'contactCtrl':'',
    'emailCtrl':'',
    'currentLine1Ctrl':'',
    'currentCityCtrl':'',
    'currentStateCtrl':'',
    'currentCountryCtrl':'',
    'currentPincodeCtrl':'',
    'permanentLine1Ctrl':'',
    'permanentCityCtrl':'',
    'permanentStateCtrl':'',
    'permanentCountryCtrl':'',
    'permanentPincodeCtrl':'',
    'companyCtrl':'',
    'fromDateCtrl':'',
    'toDateCtrl':'',
    'roleCtrl':''
  };

  constructor(private _formBuilder: FormBuilder, private service:UtilService, private changeRef:ChangeDetectorRef) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      lastCtrl: ['', Validators.required],
      contactCtrl: ['', Validators.required],
      emailCtrl: ['', [Validators.required,Validators.email]],
    });
    this.secondFormGroup = this._formBuilder.group({
      currentLine1Ctrl: ['', Validators.required],
      currentCityCtrl: ['', Validators.required],
      currentStateCtrl: ['', Validators.required],
      currentCountryCtrl: ['', Validators.required],
      currentPincodeCtrl: ['', Validators.required],
      permanentLine1Ctrl: ['', Validators.required],
      permanentCityCtrl: ['', Validators.required],
      permanentStateCtrl: ['', Validators.required],
      permanentCountryCtrl: ['', Validators.required],
      permanentPincodeCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      companyCtrl: ['', Validators.required],
      fromDateCtrl: ['', Validators.required],
      toDateCtrl: ['', Validators.required],
      roleCtrl: ['', Validators.required]
    });

    this.data = [{
      label:'First name',
      placeholder:'First Nme',
      type:'text',
      control:'firstCtrl',
      attributes:[
        {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[
         {mandatory:true},
         {inputAccept:0,attrId:1}  // 0 - accept only text , 1 - number, 2 - text + number.
        ]
     },
     {
      label:'Last name',
      placeholder:'Last Nme',
      type:'text',
      control:'lastCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[
         {mandatory:true},
         {inputAccept:0,attrId:1} 
        ]
     },
     {
      label:'Contact Number',
      placeholder:'Contact Number',
      control:'contactCtrl',
      type:'tel',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[
         {mandatory:true},
         {inputAccept:1,attrId:1} 
        ]
     },
     {
      label:'Email',
      placeholder:'Email',
      type:'email',
      control:'emailCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[
         {mandatory:true},
         {inputAccept:2,attrId:1} 
        ]
     },

     {
      label:'Line1',
      placeholder:'Line1',
      type:'text',
      control:'currentLine1Ctrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[
         {mandatory:true},
         {inputAccept:2,attrId:1} ]
     },
     {
      label:'City',
      placeholder:'City',
      type:'text',
      control:'currentCityCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},
        {inputAccept:0,attrId:1} ]
     },
     {
      label:'State',
      placeholder:'State',
      type:'text',
      control:'currentStateCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     },
     {
      label:'Country',
      placeholder:'Country',
      type:'text',
      control:'currentCountryCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     },
     {
      label:'Pincode',
      placeholder:'text',
      type:'text',
      control:'currentPincodeCtrl',
      attributes:[
        {'readOnly':false,attrId:1},
        {defaultVal:''}
        ],
       validators:[{mandatory:true},{inputAccept:1,attrId:1} ]
     },
     {
      label:'Line1',
      placeholder:'Line1',
      type:'text',
      control:'permanentLine1Ctrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:2,attrId:1} ]
     },
     {
      label:'City',
      placeholder:'City',
      type:'text',
      control:'permanentCityCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     },
     {
      label:'State',
      placeholder:'State',
      type:'text',
      control:'permanentStateCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     },
     {
      label:'Country',
      placeholder:'Country',
      type:'text',
      control:'permanentCountryCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     },
     {
      label:'Pincode',
      placeholder:'text',
      type:'text',
      control:'permanentPincodeCtrl',
      attributes:[
        {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:1,attrId:1} ]
     },
     {
      label:'Company Name',
      placeholder:'text',
      type:'text',
      control:'companyCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:2,attrId:1} ]
     },
     {
      label:'Start Date',
      placeholder:'Start Date',
      type:'date',
      control:'fromDateCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true}]
     },
     {
      label:'End date',
      placeholder:'End Date',
      type:'date',
      control:'toDateCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true}]
     },
     {
      label:'Role',
      placeholder:'Role',
      type:'text',
      control:'roleCtrl',
      attributes:[
         {'readOnly':false,attrId:1},
        {defaultVal:'',attrId:2}
       ],
       validators:[{mandatory:true},{inputAccept:0,attrId:1} ]
     }];
    localStorage.setItem('formData', JSON.stringify(this.formData));
  }

  

goBack(stepper: MatStepper){
    stepper.previous();
}
next(stepper: MatStepper,form){

  if(form.status === "INVALID") {
    return;
  }  
  else {
    let _data = JSON.parse(localStorage.getItem('formData'));
    for(let field in form.value){
      _data[field] = form.value[field];
    }
   localStorage.setItem('formData', JSON.stringify(_data));
    stepper.selected.completed = true;
    stepper.next();
  }
}
setPermanentAddress(checked){
if(checked){
  let _data = JSON.parse(localStorage.getItem('formData'));
  let form = this.secondFormGroup;
  this.secondFormGroup.patchValue({
    permanentLine1Ctrl: form.value['currentLine1Ctrl'],
    permanentCityCtrl: form.value['currentCityCtrl'],
    permanentStateCtrl: form.value['currentStateCtrl'],
    permanentCountryCtrl: form.value['currentCountryCtrl'],
    permanentPincodeCtrl: form.value['currentPincodeCtrl'], 
  });
  
  this.changeRef.detectChanges();
}
}
submit(){
  let data = JSON.parse(localStorage.getItem('formData'));
  console.log("Submitted Data",data);
  this.service.submit('submit',data).subscribe(res =>{
console.log(res);
  },err => {
console.error(err);
  })
}

  
}
