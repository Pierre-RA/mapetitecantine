import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { PageScrollConfig } from 'ng2-page-scroll';

import { Dot, Image } from '../../shared';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {

  fixed: string;
  color: string;
  @ViewChild('concept') conceptElement;
  @ViewChild('menu') menuElement;
  @ViewChild('gallery') galleryElement;
  @ViewChild('contact') contactElement;

  constructor() {
    this.fixed = '';
    this.color = 'white';
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {}

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (document.documentElement.scrollTop >= window.innerHeight) {
      this.fixed = 'fixed';
    } else {
      this.fixed = '';
    }
    if (document.documentElement.scrollTop <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight -65
    ) {
      this.color = 'white';
    } else if (document.documentElement.scrollTop <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight +
      this.menuElement.nativeElement.scrollHeight -65
    ) {
      this.color = 'blue';
    } else if (
      document.documentElement.scrollTop <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight +
      this.menuElement.nativeElement.scrollHeight +
      this.galleryElement.nativeElement.scrollHeight - 65
    ) {
      this.color = 'mustard';
    } else {
      this.color = 'black';
    }
  }

}
