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
      state('white', style({
        backgroundColor: 'white',
        filter: 'invert(0%)'
      })),
      state('black', style({
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
    this.state = 'white';
    this.dotRight = {
      url: '/concept',
      position: 'right'
    };
  }

  ngOnInit() {}

  switchImage(): void {
    this.state = this.state == 'white' ? 'black' : 'white';
  }

}
