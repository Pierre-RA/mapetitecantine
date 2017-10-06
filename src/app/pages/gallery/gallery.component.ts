import { Component, OnInit } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  image: Image;
  title: string;
  color: string;
  left: Dot;
  right: Dot;

  constructor() {
    this.image = {
      url: 'assets/img/carotte_noir.png',
      title: 'mapetitecantine - Galerie',
      alt: 'galerie',
      type: 'carotte'
    };
    this.title = 'Galerie';
    this.color = 'mustard';
    this.left = {
      url: '/menu',
      position: 'left'
    };
    this.right = {
      url: '/contact',
      position: 'right'
    };
  }

  ngOnInit() {

  }

}
