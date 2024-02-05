import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiResultComponent } from './bmi-result.component';

describe('BmiResultComponent', () => {
  let component: BmiResultComponent;
  let fixture: ComponentFixture<BmiResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiResultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
