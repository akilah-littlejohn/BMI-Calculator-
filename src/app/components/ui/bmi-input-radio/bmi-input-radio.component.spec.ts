import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiInputRadioComponent } from './bmi-input-radio.component';

describe('BmiInputRadioComponent', () => {
  let component: BmiInputRadioComponent;
  let fixture: ComponentFixture<BmiInputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiInputRadioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
