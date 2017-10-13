import { Component, OnInit } from '@angular/core';

import { slideContentPages } from '../animations/slide-content-pages';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [slideContentPages],
})
export class PagesComponent implements OnInit {

  constructor() {
    localStorage.removeItem('initial-transition');
  }

  ngOnInit() {
  }

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }

}
