import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
