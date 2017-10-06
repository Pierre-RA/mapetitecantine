import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Dot } from '../../shared';

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
        backgroundColor: 'white',
        filter: 'invert(100%)'
      })),
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  state: string;
  dotRight: Dot;

  constructor() {
    this.state = '0';
    this.dotRight = {
      url: '/concept',
      position: 'right'
    };
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
          this.state = '0';
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

}
