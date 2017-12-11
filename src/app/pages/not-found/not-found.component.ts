import { Component, OnInit } from '@angular/core';

import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(
    private colorService: ColorService
  ) {
    this.colorService.setColor('white');
  }

  ngOnInit() {
  }

}
