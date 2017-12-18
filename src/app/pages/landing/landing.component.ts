import { Component, OnInit, OnDestroy, HostListener, ViewChild, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Page, Picture } from '../../shared';

import { PageService } from './page.service';
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
  fixed: boolean;
  picture: Picture;
  sub: Subscription;
  conceptSub: Subscription;
  menuSub: Subscription;
  conceptPage: string;
  menuPage: string;

  constructor(
    private pageService: PageService,
    private galleryService: GalleryService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.color = 'white';
    this.fixed = false;
    this.sub = this.galleryService.getLastPicture().subscribe(data => {
      this.picture = data;
    });
    this.conceptSub = this.pageService.getPage('concept').subscribe(data => {
      if (data && data.content) {
        this.conceptPage = data.content.rendered;
      }
    });
    this.menuSub = this.pageService.getPage('menu').subscribe(data => {
      if (data && data.content) {
        this.menuPage = data.content.rendered;
      }
    });
  }

  ngOnInit() {
  }

  OnDestroy() {
    this.sub.unsubscribe();
    this.conceptSub.unsubscribe();
    this.menuSub.unsubscribe();
  }

  setScroll() {
    if (window.scrollY <= window.innerHeight) {
      this.color = 'white';
      this.fixed = false;
    } else if (window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158
    ) {
      this.color = 'white';
      this.fixed = true;
    } else if (window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158 +
      this.menuElement.nativeElement.scrollHeight
    ) {
      this.color = 'blue';
      this.fixed = true;
    } else if (
      window.scrollY <=
      window.innerHeight +
      this.conceptElement.nativeElement.scrollHeight - 158 +
      this.menuElement.nativeElement.scrollHeight +
      this.galleryElement.nativeElement.scrollHeight
    ) {
      this.color = 'mustard';
      this.fixed = true;
    } else {
      this.color = 'black';
      this.fixed = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.setScroll();
    }
  }

}
