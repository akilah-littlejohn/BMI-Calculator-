import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-input-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi-input-radio.component.html',
  styleUrl: './bmi-input-radio.component.css'
})
export class BmiInputRadioComponent {
  @Input()name!: string;  
  @Input()label!: string; 
  @Input() selectedUnit!: string;
}
