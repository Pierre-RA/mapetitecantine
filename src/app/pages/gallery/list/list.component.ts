import { Component, OnInit, OnDestroy } from '@angular/core';

import { GalleryService } from '../gallery.service';
import { Picture, Link } from '../../../shared';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  gallery: Array<Picture>;
  sub: Subscription;
  links: Array<Link>;
  color: string;
  fixed: boolean;

  constructor(
    private galleryService: GalleryService
  ) {
    this.color = 'mustard';
    this.fixed = true;
    this.links = [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Galerie',
      url: '/galerie'
    }];
  }

  ngOnInit() {
    this.sub = this.galleryService.getPictureList().subscribe(
      (gallery: Array<Picture>) => {
        this.gallery = gallery;
      });
  }

  OnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
