import { Component, Input } from '@angular/core';
import { BmiCardComponent } from '../../ui/bmi-card/card.component';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CalculatorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input()title!: string;
  @Input()paragraph!: string;
  @Input()headerImage!: string;
}
