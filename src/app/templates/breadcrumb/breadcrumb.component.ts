import { Component, OnInit, Input } from '@angular/core';

import { Link } from '../../shared';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  @Input('links') links: Array<Link>;

  constructor() { }

  ngOnInit() {
  }

}
