import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [
    BmiInputComponent,
    BmiInputRadioComponent,
    BmiResultComponent,
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  selectedUnit!: string;
  bmiResult!: string;
  bmiForm!: FormGroup;




  constructor(fb: FormBuilder) {

    this.bmiForm = fb.group({

      metricForm: fb.group({
        cm: [''],
        kg: [''],
      }),
 

      imperialForm: fb.group({
        ft: [''],
        in: [''],
        st: [''],
        lbs: ['']
      })


    });



  }







}