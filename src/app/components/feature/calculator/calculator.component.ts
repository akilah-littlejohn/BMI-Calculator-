import { Component, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormGroup, ReactiveFormsModule, FormBuilder, FormsModule, FormControl } from '@angular/forms';
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';

// Add these interfaces at the top of the file
interface MetricInputs {
  cm: number | null;
  kg: number | null;
}

interface ImperialInputs {
  ft: number | null;
  in: number | null;
  st: number | null;
  lbs: number | null;
}

type BmiFormGroup = FormGroup<{
  metricInputs: FormGroup<{
    cm: FormControl<number | null>;
    kg: FormControl<number | null>;
  }>;
  imperialInputs: FormGroup<{
    ft: FormControl<number | null>;
    in: FormControl<number | null>;
    st: FormControl<number | null>;
    lbs: FormControl<number | null>;
  }>;
}>;

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
  bmiForm!: BmiFormGroup;

  constructor(private fb: FormBuilder) {
    this.bmiForm = this.fb.group({
      metricInputs: this.fb.group({
        cm: this.fb.control<number | null>(null),
        kg: this.fb.control<number | null>(null)
      }),
      imperialInputs: this.fb.group({
        ft: this.fb.control<number | null>(null),
        in: this.fb.control<number | null>(null),
        st: this.fb.control<number | null>(null),
        lbs: this.fb.control<number | null>(null)
      })
    });
  }

  onUnitChange(unit: string): void {
    this.selectedUnit = unit;
    if (unit === 'metric') {
      this.bmiForm.get('imperialInputs')?.reset();
    } else {
      this.bmiForm.get('metricInputs')?.reset();
    }
  }

  ngOnInit(): void {
    this.bmiForm.valueChanges.subscribe(value => {
      if (this.selectedUnit === 'metric') {
        this.calculateMetricBMI();
      } else if (this.selectedUnit === 'imperial') {
        this.calculateImperialBMI();
      }
    });
  }

  private calculateMetricBMI(): void {
    const metricValues = this.bmiForm.get('metricInputs')?.value;
    if (metricValues?.cm && metricValues?.kg) {
      const heightInMeters = metricValues.cm / 100;
      const bmi = metricValues.kg / (heightInMeters * heightInMeters);
      this.updateBMIResult(bmi);
    }
  }

  private calculateImperialBMI(): void {
    const imperialValues = this.bmiForm.get('imperialInputs')?.value;
    if (imperialValues?.ft && imperialValues?.st) {
      const heightInInches = (imperialValues.ft * 12) + (imperialValues.in || 0);
      const weightInPounds = (imperialValues.st * 14) + (imperialValues.lbs || 0);
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
