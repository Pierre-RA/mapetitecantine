import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    trigger('switch', [
      state('0', style({
        backgroundColor: 'white',
        filter: 'invert(0%)'
      })),
      state('1', style({
        backgroundColor: 'rgb(78, 220, 202)',
        filter: 'invert(0%)'
      })),
      state('2', style({
        backgroundColor: 'rgb(255, 201, 21)',
        filter: 'invert(0%)'
      })),
      state('3', style({
        backgroundColor: 'white',
        filter: 'invert(100%)'
      })),
    ]),
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
export class WelcomeComponent implements OnInit {

  state: string;
  dotRight: string;

  constructor() {
    this.state = '0';
    this.dotRight = 'out';
  }

  ngOnInit() {}

  changeState(event): void {
    const transitionTiming = 1000;
    switch (event.toState) {
      case '0':
        setTimeout(() => {
          this.state = '1';
        }, transitionTiming);
        break;
      case '1':
        setTimeout(() => {
          this.state = '2';
        }, transitionTiming);
        break;
      case '2':
        setTimeout(() => {
          this.state = '3';
        }, transitionTiming);
        break;
      case '3':
        setTimeout(() => {
          this.state = '0';
        }, transitionTiming);
        break;
    }
  }

  onBiggerDot(): void {
    this.dotRight = 'in';
  }

  onSmallerDot(): void {
    this.dotRight = 'out';
  }

}
