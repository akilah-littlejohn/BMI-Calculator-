import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-input-radio',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bmi-input-radio.component.html',
  styleUrl: './bmi-input-radio.component.css'
})
export class BmiInputRadioComponent {
  @Input() name!: string;  
  @Input() label!: string; 
  @Input() value!: string;
  @Input() checked: boolean = false;
  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event): void {
    const radio = event.target as HTMLInputElement;
    if (radio.checked) {
      this.valueChange.emit(this.value);
    }
  }
}
