import { Component, OnInit, OnDestroy } from '@angular/core';

import { ColorService } from '../../../services/color.service';
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

  constructor(
    private galleryService: GalleryService,
    private colorService: ColorService
  ) {
    this.colorService.setColor('mustard');
    this.links = [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Gallery',
      url: '/galerie'
    }];
  }

  ngOnInit() {
    this.sub = this.galleryService.getPictureList().subscribe(
      (gallery: Array<Picture>) => {
        this.gallery = gallery;
        this.gallery[0].acf = {
          image_1: {
            url: '/assets/img/La_petite_cantine_Ambiance_Salle_Vide.jpg'
          }
        };
        this.gallery[1].acf = {
          image_1: {
            url: '/assets/img/Hamburger_tomate.jpg'
          }
        };
        this.gallery[2].acf = {
          image_1: {
            url: '/assets/img/Muffins.jpg'
          }
        };
        this.gallery[3].acf = {
          image_1: {
            url: '/assets/img/Quiche_Feta.jpg'
          }
        };
      });
  }

  OnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}
