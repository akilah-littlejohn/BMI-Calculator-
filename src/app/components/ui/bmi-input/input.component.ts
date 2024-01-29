import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmi-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class BmiInputComponent {
@Input()label!: string; 
@Input()name!: string;  
@Input()metric!: string;
}
