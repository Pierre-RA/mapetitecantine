import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GalleryService } from '../gallery.service';
import { Picture, Link } from '../../../shared';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  picture: Picture;
  sub: Subscription;
  links: Array<Link>;
  color: string;
  fixed: boolean;

  constructor(
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute
  ) {
    this.color = 'white';
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
    this.sub = this.galleryService.getPicture(this.activatedRoute.snapshot.params.slug).subscribe(data => {
      if (data) {
        this.picture = data;
        this.links.push({
          name: data.title.rendered
        });
      }
    });
  }

}
