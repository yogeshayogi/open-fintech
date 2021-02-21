import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligibality-calculator',
  templateUrl: './eligibality-calculator.component.html',
  styleUrls: ['./eligibality-calculator.component.scss']
})
export class EligibalityCalculatorComponent implements OnInit {
value: any = 100000;
  constructor() { }

  ngOnInit(): void {
  }

}
