import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { slideContentPages } from '../animations/slide-content-pages';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {

  color: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    localStorage.removeItem('initial-transition');
    this.color = 'white';
  }

  ngOnInit() {
  }

}
