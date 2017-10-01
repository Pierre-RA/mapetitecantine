import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {

  dotLeft: string;

  constructor() {
    this.dotLeft = 'out';
  }

  ngOnInit() {
  }

  onBiggerDot(dot: string): void {
    this[dot] = 'in';
  }

  onSmallerDot(dot: string): void {
    this[dot] = 'out';
  }

}
