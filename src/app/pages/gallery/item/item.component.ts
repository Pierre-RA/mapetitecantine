import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ColorService } from '../../../services/color.service';
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

  constructor(
    private galleryService: GalleryService,
    private colorService: ColorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.colorService.setColor('white');
    this.links = [{
      name: 'Home',
      url: '/'
    }, {
      name: 'Gallery',
      url: 'gallery'
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
