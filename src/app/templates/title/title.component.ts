import { Component, OnInit, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
//   animations: [
//   trigger('switch', [
//     state('0', style({
//       backgroundColor: 'white',
//       filter: 'invert(0%)'
//     })),
//     state('1', style({
//       backgroundColor: 'rgb(78, 220, 202)',
//       filter: 'invert(0%)'
//     })),
//     state('2', style({
//       backgroundColor: 'rgb(255, 201, 21)',
//       filter: 'invert(0%)'
//     })),
//     state('3', style({
//       backgroundColor: 'white',
//       filter: 'invert(100%)'
//     })),
//   ])
// ]
})
export class TitleComponent implements OnInit {

  state: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.state = '0';
  }

  ngOnInit() {
  }

  changeState(event): void {
    // if (isPlatformBrowser(this.platformId)) {
    //   this.alternateState(event);
    // }
  }

  alternateState(event): void {
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

}
