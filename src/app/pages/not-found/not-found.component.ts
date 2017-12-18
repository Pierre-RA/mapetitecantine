import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  color: string;
  fixed: boolean;

  constructor() {
    this.color = 'neutral';
    this.fixed = true;
  }

  ngOnInit() {
  }

}
