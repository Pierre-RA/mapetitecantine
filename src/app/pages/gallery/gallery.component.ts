import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  color: string;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.color = 'white';
  }

  ngOnInit() {
  }

  onActivate(event) {
    this.color = event.getColor();
  }

}
