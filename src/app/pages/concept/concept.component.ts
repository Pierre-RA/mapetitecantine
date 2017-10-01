import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss'],
  animations: [
    trigger('hover', [
      state('in', style({
        transform: 'scale(3)'
      })),
      state('out', style({
        transform: 'scale(1)'
      })),
      transition('out => in', animate('300ms ease-in-out')),
      transition('in => out', animate('100ms ease-in-out'))
    ])
  ]
})
export class ConceptComponent implements OnInit {

  dotRight: string;

  constructor() {
    this.dotRight = 'out';
  }

  ngOnInit() {
  }

  onBiggerDot(): void {
    this.dotRight = 'in';
  }

  onSmallerDot(): void {
    this.dotRight = 'out';
  }

}
