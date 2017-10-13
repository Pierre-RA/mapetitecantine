import { Component, OnInit, Input } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'template-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Input() title: string;
  @Input() left: string;
  @Input() right: string;
  @Input() bottom: string;
  @Input() image: Image;
  bottomDot: Dot;

  constructor() {}

  ngOnInit() {
    this.bottomDot = {
      position: 'bottom',
      url: this.bottom
    }
  }

}
