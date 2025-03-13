<<<<<<< HEAD
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
=======
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995

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
<<<<<<< HEAD
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

  writeValue(value: any): void {
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
=======
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
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
}







