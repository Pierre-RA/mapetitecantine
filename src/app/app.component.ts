import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { ColorService } from './services/color.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {

  color: string;
  sub: Subscription;

  constructor(
    private colorService: ColorService
  ) {
    this.sub = this.colorService.getColor().subscribe(color => {
      this.color = color;
      console.log(color);
    });
  }

  onDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
