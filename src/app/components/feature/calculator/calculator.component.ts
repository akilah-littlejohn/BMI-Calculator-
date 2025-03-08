import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [
    BmiInputComponent,
    BmiInputRadioComponent,
    BmiResultComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit {
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




