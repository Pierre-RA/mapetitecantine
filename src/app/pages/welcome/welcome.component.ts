import { Component, OnInit, HostListener } from '@angular/core';

import { Dot, Image } from '../../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  fixed: string;
  color: string;

  constructor() {
    this.fixed = '';
    this.color = 'white';
  }

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop >= window.screen.height) {
      this.fixed = 'fixed';
    } else {
      this.fixed = '';
    }
  }

}
