import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: BmiInputComponent;
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
