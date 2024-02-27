import { Component, Input } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';

@Component({
  selector: 'bmi-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class BmiInputComponent {
  @Input() control = new FormControl();
  @Input() label!: string;
  @Input() name!: string;
  @Input() unit!: string;
  @Input() selectedUnit!: string;
  @Input() min!: string;
  @Input() max!: string;
  @Input() maxlength!: string;
  @Input() minLength!: string;
}
