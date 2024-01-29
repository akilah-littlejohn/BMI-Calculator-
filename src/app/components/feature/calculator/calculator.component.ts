import { Component } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [BmiInputComponent, BmiInputRadioComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}
