import { Component, OnInit } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  image: Image;
  title: string;
  color: string;
  left: Dot;
  right: Dot;

  constructor() {
    this.image = {
      url: 'assets/img/pomme_noir.png',
      title: 'mapetitecantine - Menu',
      alt: 'menu',
      type: 'pomme'
    };
    this.title = 'Menu';
    this.color = 'blue';
    this.left = {
      url: '/concept',
      position: 'left'
    };
    this.right = {
      url: '/gallery',
      position: 'right'
    };
  }

  ngOnInit() {
  }

}
