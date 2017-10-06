import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Dot } from '../../shared/dot';

@Component({
  selector: 'dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.scss'],
  animations: [
    trigger('hover', [
      state('in', style({
        transform: 'scale(2)'
      })),
      state('out', style({
        transform: 'scale(1)'
      })),
      transition('out => in', animate('300ms ease-in-out')),
      transition('in => out', animate('100ms ease-in-out'))
    ])
  ]
})
export class DotComponent implements OnInit {

  @Input() dot: Dot;
  isBig: string;

  constructor() {
    this.isBig = 'out';
  }

  ngOnInit() {
  }

  onBiggerDot() {
    this.isBig = 'in';
  }

  onSmallerDot() {
    this.isBig = 'out';
  }

}
