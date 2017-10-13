import { Component, OnInit } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'app-concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit {

  image: Image;
  title: string;
  color: string;
  right: Dot;

  constructor() {
    this.image = {
      url: 'assets/img/gobelet_noir.png',
      title: 'mapetitecantine - Concept',
      alt: 'concept',
      type: 'gobelet'
    };
    this.title = 'Concept';
    this.color = 'white';
    this.right = {
      url: '/pages/menu',
      position: 'right'
    };
  }

  ngOnInit() {
  }

}
