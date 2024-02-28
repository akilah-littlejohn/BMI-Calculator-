import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [
    BmiInputComponent,
    BmiInputRadioComponent,
    BmiResultComponent,
    ReactiveFormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {

  selectedUnit!: string;
  bmiResult!: string;
  metricFormGroup!: FormGroup;
  imperialFormGroup!: FormGroup;

  ngOnInit(): void {

    this.createMetricForm();
    this.createImperialForm();



  }


  createMetricForm(): void {
    this.metricFormGroup = new FormGroup({
      cm: new FormControl(['']),
      kg: new FormControl(['']),
    })

  }

  createImperialForm(): void {
    this.imperialFormGroup = new FormGroup({
      ft: new FormControl(['']),
      in: new FormControl(['']),
      st: new FormControl(['']),
      lbs: new FormControl([''])
    })

  }
  onSubmit(form:any){
    console.log(form)
  }
 



}
