import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { slidePage } from './animations/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slidePage
  ]
})
export class AppComponent {
  title = 'app';

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
