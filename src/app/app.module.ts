import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {DemoMaterialModule} from './material-module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { MatStepperModule } from '@angular/material/stepper';
import { TextFormFieldComponent } from './Components/FormFields/text-form-field/text-form-field.component';
import { NumericFormFieldComponent } from './Components/FormFields/numeric-form-field/numeric-form-field.component';
import { DateFormFieldComponent } from './Components/FormFields/date-form-field/date-form-field.component';
import { DropdownFormFieldComponent } from './Components/FormFields/dropdown-form-field/dropdown-form-field.component';
import { EmailFormFieldComponent } from './components/Formfields/email-form-field/email-form-field.component';
import { PhoneFormFieldComponent } from './components/Formfields/phone-form-field/phone-form-field.component';

@NgModule({
  declarations: [
    AppComponent,
    TextFormFieldComponent,
    NumericFormFieldComponent,
    DateFormFieldComponent,
    DropdownFormFieldComponent,
    EmailFormFieldComponent,
    PhoneFormFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
