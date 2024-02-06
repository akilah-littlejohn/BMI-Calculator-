import { Component, Input, OnInit } from '@angular/core';
import { BmiInputComponent } from '../../ui/bmi-input/input.component';
import { BmiInputRadioComponent } from '../../ui/bmi-input-radio/bmi-input-radio.component';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { BmiResultComponent } from '../../ui/bmi-result/bmi-result.component';

@Component({
  selector: 'bmi-calculator',
  standalone: true,
  imports: [
    BmiInputComponent,
    BmiInputRadioComponent,
    FormsModule, 
    JsonPipe, 
    BmiResultComponent
  ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  selectedUnit!: string;
  bmiResult!: string;




  constructor() {

  }







}