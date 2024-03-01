import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  bmiResult: string = '';
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

  calculateBmiMetric(): void {

    const cm = this.metricFormGroup.get('cm')?.value;
    const kg = this.metricFormGroup.get('kg')?.value;
    if (cm && kg) {
      const heightInMeters = cm / 100;
      const bmi = kg / (heightInMeters * heightInMeters);
      console.log('Metric BMI:', bmi);
    }

  }

  calculateImperialMetric(): void {

    const ft = this.imperialFormGroup.get('ft')?.value;
    const inch = this.imperialFormGroup.get('in')?.value;
    const st = this.imperialFormGroup.get('st')?.value;
    const lbs = this.imperialFormGroup.get('lbs')?.value;

    if (ft && inch && st && lbs) {
      const heightInches = (ft * 12) + inch;
      const weightInPounds = (st * 14) + lbs;
      const bmi = (weightInPounds / (heightInches * heightInches)) * 703;
      console.log('Imperial BMI:', bmi);
    }

  

  }




}
