import { Component, OnInit, OnDestroy, HostListener, ViewChild, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Picture } from '../../shared';

import { ColorService } from '../../services/color.service';
import { GalleryService } from '../gallery/gallery.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('concept') conceptElement;
  @ViewChild('menu') menuElement;
  @ViewChild('galerie') galleryElement;
  @ViewChild('contact') contactElement;
  color: string;
  picture: Picture;
  sub: Subscription;

  constructor(
    private colorService: ColorService,
    private galleryService: GalleryService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.sub = this.galleryService.getLastPicture().subscribe(data => {
      this.picture = data;
    });
  }

  ngOnInit() {
  }

  OnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  setScroll() {
    // if (window.scrollY >= window.innerHeight) {
    //   this.fixed = 'fixed';
    //   this.removeCover();
    // } else {
    //   this.fixed = '';
    // }
    if (window.scrollY <=
      // window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158
    ) {
      if (this.color !== 'white') {
        this.colorService.setColor('white');
      }
      this.color = 'white';
    } else if (window.scrollY <=
      // window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158 +
      this.menuElement.nativeElement.scrollHeight
    ) {
      if (this.color !== 'blue') {
        this.colorService.setColor('blue');
      }
      this.color = 'blue';
    } else if (
      window.scrollY <=
      // window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158 +
      this.menuElement.nativeElement.scrollHeight +
      this.galleryElement.nativeElement.scrollHeight
    ) {
      if (this.color !== 'mustard') {
        this.colorService.setColor('mustard');
      }
      this.color = 'mustard';
    } else {
      if (this.color !== 'black') {
        this.colorService.setColor('black');
      }
      this.color = 'black';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.setScroll();
    }
  }

}
