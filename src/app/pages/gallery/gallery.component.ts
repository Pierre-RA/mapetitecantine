import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
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
export class GalleryComponent implements OnInit {

  dotLeft: string;
  dotRight: string;

  constructor() {
    this.dotLeft = 'out';
    this.dotRight = 'out';
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
