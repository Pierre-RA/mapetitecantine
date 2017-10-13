import { Component, OnInit } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {

  image: Image;
  title: string;
  color: string;
  left: Dot;

  constructor() {
    this.image = {
      url: 'assets/img/poule_noir.png',
      title: 'mapetitecantine - Contact',
      alt: 'contact',
      type: 'poule'
    };
    this.title = 'Contact';
    this.color = 'black';
    this.left = {
      url: '/pages/gallery',
      position: 'left'
    };
  }

  ngOnInit() {
  }

}
