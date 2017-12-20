import { Component, OnInit, OnDestroy, HostListener, ViewChild, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Page, Picture } from '../../shared';

import { PageService } from './page.service';
import { GalleryService } from '../gallery/gallery.service';
import { environment } from '../../../environments/environment';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  @ViewChild('actualite') actualiteElement;
  @ViewChild('concept') conceptElement;
  @ViewChild('produits') produitsElement;
  @ViewChild('contact') contactElement;
  color: string;
  showHeader: boolean;
  picture: Picture;
  sub: Subscription;
  conceptSub: Subscription;
  menuSub: Subscription;
  conceptPage: string;
  menuPage: string;
  lat: number;
  lng: number;
  zoom: number;

  constructor(
    private pageService: PageService,
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.color = 'white';
    this.showHeader = false;
    this.lat = environment.address.lat;
    this.lng = environment.address.lng;
    this.zoom = environment.address.zoom;
    console.log(this.activatedRoute.snapshot);
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
    if (this.sub) {
      this.sub.unsubscribe();
    }
    if (this.conceptSub) {
      this.conceptSub.unsubscribe();
    }
    if (this.menuSub) {
      this.menuSub.unsubscribe();
    }
  }

  setScroll() {
    if (window.scrollY <= window.innerHeight) {
      this.color = 'white';
      this.showHeader = false;
    } else if (window.scrollY <=
      window.innerHeight +
      this.actualiteElement.nativeElement.scrollHeight
    ) {
      this.color = 'white';
      this.showHeader = true;
    } else if (window.scrollY <=
      window.innerHeight +
      this.actualiteElement.nativeElement.scrollHeight +
      this.conceptElement.nativeElement.scrollHeight - 158
    ) {
      this.color = 'blue';
      this.showHeader = true;
    } else if (window.scrollY <=
      window.innerHeight +
      this.actualiteElement.nativeElement.scrollHeight +
      this.conceptElement.nativeElement.scrollHeight +
      this.produitsElement.nativeElement.scrollHeight - 158
    ) {
      this.color = 'mustard';
      this.showHeader = true;
    } else {
      this.color = 'black';
      this.showHeader = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.setScroll();
    }
  }

}
