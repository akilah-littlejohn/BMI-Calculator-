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
@Input()metric!: string;
@Input()selectedUnit!: string;
}
