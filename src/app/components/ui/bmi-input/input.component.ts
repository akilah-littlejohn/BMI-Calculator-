import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class BmiInputComponent {
@Input()label!: string; 
@Input()name!: string;  
@Input()unit!: string;
@Input()selectedUnit!: string;
@Input()min!: string;
@Input()max!: string;
@Input()maxlength!: string;  
@Input()minLength!: string;
}
