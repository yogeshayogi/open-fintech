import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibalityCalculatorComponent } from './eligibality-calculator.component';

describe('EligibalityCalculatorComponent', () => {
  let component: EligibalityCalculatorComponent;
  let fixture: ComponentFixture<EligibalityCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EligibalityCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibalityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
