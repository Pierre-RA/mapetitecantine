import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { Image, Dot } from '../../shared';

@Component({
  selector: 'template-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  @Input() color: string;
  @Input() title: string;
  @Input() image: Image;
  @Input() left: Dot;
  @Input() right: Dot;
  @ViewChild('target') target: any;
  bottom: Dot;

  constructor() {
    this.bottom = {
      position: 'bottom'
    };
  }

  ngOnInit() {
  }

}
