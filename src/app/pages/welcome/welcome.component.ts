import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Router } from '@angular/router';
import { PageScrollConfig } from 'ng2-page-scroll';

import { Dot, Image } from '../../shared';

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
    ])
  ]
})
export class WelcomeComponent implements OnInit {

  state: string;
  fixed: string;
  color: string;
  showCover: boolean;
  @ViewChild('concept') conceptElement;
  @ViewChild('menu') menuElement;
  @ViewChild('gallery') galleryElement;
  @ViewChild('contact') contactElement;

  constructor(
    private router: Router
  ) {
    this.showCover = true;
    this.state = '0';
    this.fixed = '';
    this.color = 'white';
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {}

  goTo(link: string) {
    this.router.navigate(['/galerie', link]);
  }

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

  removeCover() {
    // this.showCover = false;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    console.log(
      'wi: ' + window.innerHeight,
      'dds: ' + document.documentElement.scrollTop,
      'ws: ' + window.scrollY,
      'tcs: ' + this.conceptElement.nativeElement.scrollHeight,
      'tgs: ' + this.galleryElement.nativeElement.scrollHeight
    );
    // if (document.documentElement.scrollTop >= window.innerHeight) {
    if (window.scrollY >= window.innerHeight) {
      this.fixed = 'fixed';
      this.removeCover();
    } else {
      this.fixed = '';
    }
    if (window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 84
    ) {
      this.color = 'white';
    } else if (window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight +
      this.menuElement.nativeElement.scrollHeight - 84
    ) {
      this.color = 'blue';
    } else if (
      window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight +
      this.menuElement.nativeElement.scrollHeight +
      this.galleryElement.nativeElement.scrollHeight - 84
    ) {
      this.color = 'mustard';
    } else {
      this.color = 'black';
    }
  }

}
