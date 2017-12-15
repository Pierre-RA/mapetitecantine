import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Picture } from '../../shared';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input('picture') picture: Picture;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToLink() {
    this.router.navigate(['galerie', this.picture.slug]);
  }

}
