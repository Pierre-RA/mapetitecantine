import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { slidePage } from '../../animations/slide-page';
import { Dot, Image } from '../../shared';

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
      }))
    ]),
    slidePage
  ]
})
export class WelcomeComponent implements OnInit {

  state: string;
  dotRight: Dot;
  dotLeft: Dot;
  dotConcept: Dot;
  transition: string;
  conceptImage: Image;
  menuImage: Image;
  galleryImage: Image;
  contactImage: Image;

  constructor() {
    this.transition = localStorage.getItem('initial-transition') || 'logo';
    this.state = 'white';
    this.dotRight = {
      position: 'right'
    };
    this.dotLeft = {
      position: 'left'
    };
    this.dotConcept = {
      position: 'bottom',
      url: '/pages/concept'
    }
    this.conceptImage = {
      url: '/assets/img/gobelet_noir.png',
      alt: 'concept',
      title: 'ma petite cantine - concept',
      type: 'gobelet'
    };
    this.menuImage = {
      url: '/assets/img/pomme_noir.png',
      alt: 'menu',
      title: 'ma petite cantine - menu',
      type: 'pomme'
    };
    this.galleryImage = {
      url: '/assets/img/carotte_noir.png',
      alt: 'galerie',
      title: 'ma petite cantine - galerie',
      type: 'carotte'
    };
    this.contactImage = {
      url: '/assets/img/poule_noir.png',
      alt: 'contact',
      title: 'ma petite cantine - contact',
      type: 'contact'
    };
  }

  ngOnInit() {}

  switchImage(): void {
    this.state = this.state == 'white' ? 'black' : 'white';
  }

  goTo(direction: string): void {
    localStorage.setItem('initial-transition', direction);
    this.transition = direction;
    console.log(direction);
  }

}
