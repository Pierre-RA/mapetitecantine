import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { DOCUMENT} from '@angular/common';
import { PageScrollConfig, PageScrollService, PageScrollInstance } from 'ng2-page-scroll';

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

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) {
    this.bottom = {
      position: 'bottom'
    };
    PageScrollConfig.defaultDuration = 500;
  }

  ngOnInit() {
  }

  goToBottom() {
    let pageScrollInstance: PageScrollInstance =
      PageScrollInstance.simpleInstance(this.document, '#bottom');
    this.pageScrollService.start(pageScrollInstance);
  }

}
