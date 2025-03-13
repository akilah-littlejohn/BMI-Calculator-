import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
<<<<<<< HEAD
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
=======
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [
    BmiInputComponent,
    BmiInputRadioComponent,
    BmiResultComponent,
<<<<<<< HEAD
    ReactiveFormsModule,
    FormsModule
=======
    ReactiveFormsModule
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
<<<<<<< HEAD
  selectedUnit: string = '';
  bmiResult: string = '';
  bmiForm: FormGroup;  // Remove the ! operator

  constructor(private fb: FormBuilder) {
    this.bmiForm = this.fb.group({  // Initialize in constructor
      metricInputs: this.fb.group({
        cm: [null],
        kg: [null],
      }),
      imperialInputs: this.fb.group({
        ft: [null],
        in: [null],
        st: [null],
        lbs: [null]
      })
    });
=======

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

  

>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
  }

  // Remove initializeForm method since we're initializing in constructor

  onUnitChange(unit: string): void {
    this.selectedUnit = unit;
    if (unit === 'metric') {
      this.bmiForm.get('imperialInputs')?.reset();
    } else {
      this.bmiForm.get('metricInputs')?.reset();
    }
  }

  ngOnInit(): void {
    // Subscribe to form value changes
    this.bmiForm.valueChanges.subscribe(value => {
      if (this.selectedUnit === 'metric') {
        this.calculateMetricBMI();
      } else if (this.selectedUnit === 'imperial') {
        this.calculateImperialBMI();
      }
    });
  }

  private calculateMetricBMI(): void {
    const { cm, kg } = this.bmiForm.get('metricInputs')?.value;
    if (cm && kg) {
      const heightInMeters = cm / 100;
      const bmi = kg / (heightInMeters * heightInMeters);
      this.updateBMIResult(bmi);
    }
  }

  private calculateImperialBMI(): void {
    const { ft, in: inches, st, lbs } = this.bmiForm.get('imperialInputs')?.value;
    if (ft && st) {
      const heightInInches = (ft * 12) + (inches || 0);
      const weightInPounds = (st * 14) + (lbs || 0);
      const bmi = (weightInPounds / (heightInInches * heightInInches)) * 703;
      this.updateBMIResult(bmi);
    }
  }

  private updateBMIResult(bmi: number): void {
    if (bmi < 18.5) {
      this.bmiResult = 'underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      this.bmiResult = 'healthy';
    } else {
      this.bmiResult = 'obese';
    }
  }
}



<<<<<<< HEAD

=======
}
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
