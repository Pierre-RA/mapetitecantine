import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('fixed') fixed: string;
  @Input('color') color: string;
  showMenu: boolean;

  constructor() {
    this.showMenu = false;
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = ! this.showMenu;
  }

}
