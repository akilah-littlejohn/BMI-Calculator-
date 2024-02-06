import { Component, Input } from '@angular/core';

@Component({
  selector: 'bmi-result',
  standalone: true,
  imports: [],
  templateUrl: './bmi-result.component.html',
  styleUrl: './bmi-result.component.css'
})
export class BmiResultComponent {
  @Input() classification!:string;
  @Input() range!:string;
}
