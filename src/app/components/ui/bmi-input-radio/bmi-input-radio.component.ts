import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmi-input-radio',
  standalone: true,
  imports: [],
  templateUrl: './bmi-input-radio.component.html',
  styleUrl: './bmi-input-radio.component.css'
})
export class BmiInputRadioComponent {
  @Input()name!: string;  
  @Input()label!: string; 
}
