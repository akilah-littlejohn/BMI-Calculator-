import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'bmi-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BmiInputComponent),
      multi: true
    }
  ]
})
export class BmiInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() name!: string;
  @Input() unit!: string;
  @Input() min!: number;
  @Input() max!: number;

  value: number = 0;
  disabled: boolean = false;
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.valueAsNumber;
    this.onChange(this.value);
    this.onTouched();
  }
}







