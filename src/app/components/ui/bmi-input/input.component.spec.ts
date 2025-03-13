import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { BmiInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: BmiInputComponent;
=======
import {BmiInputComponent } from './input.component';

describe('BmiInputComponent', () => {
  let component:BmiInputComponent;
>>>>>>> 8f92072f3d80e951f488ef058fc0cad85be6c995
  let fixture: ComponentFixture<BmiInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
