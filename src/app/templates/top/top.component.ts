import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'template-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  @Input('fixed') fixed: string;
  @Input('color') color: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  }

}
