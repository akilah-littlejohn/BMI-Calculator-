import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiLayoutComponent } from './bmi-layout.component';

describe('BmiLayoutComponent', () => {
  let component: BmiLayoutComponent;
  let fixture: ComponentFixture<BmiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmiLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BmiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
