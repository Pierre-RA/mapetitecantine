import { Component, OnInit, OnDestroy, HostListener, ViewChild, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

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
  isBlack: boolean;

  constructor(
    private pageService: PageService,
    private galleryService: GalleryService,
    private activatedRoute: ActivatedRoute,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBlack = false;
    this.color = 'white';
    this.showHeader = false;
    this.lat = environment.address.lat;
    this.lng = environment.address.lng;
    this.zoom = environment.address.zoom;
    this.meta.addTag({ name: 'og:type', content: 'website' });
    this.meta.addTag({ name: 'og:title', content: 'ma petite cantine' });
    this.meta.addTag({ name: 'og:url', content: 'https://mapetitecantine.ch/' });
    this.meta.addTag({ name: 'og:image', content: '/assets/img/ambiance_salle.jpg' });
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
    if (
      this.activatedRoute.snapshot.queryParams &&
      this.activatedRoute.snapshot.queryParams['black']
    ) {
      this.isBlack = true;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.activatedRoute.fragment.subscribe(fragment => {
        this.scrollTo(fragment);
      });
    }
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

  scrollTo(fragment: string) {
    if (fragment === 'actualite') {
      window.scrollTo(
        0,
        window.innerHeight + 1
      );
    }
    if (fragment === 'concept') {
      window.scrollTo(
        0,
        window.innerHeight +
        this.actualiteElement.nativeElement.scrollHeight
      );
    }
    if (fragment === 'produits') {
      window.
      window.scrollTo(
        0,
        window.innerHeight +
        this.actualiteElement.nativeElement.scrollHeight +
        this.conceptElement.nativeElement.scrollHeight
      );
    }
    if (fragment === 'contact') {
      window.
      window.scrollTo(
        0,
        window.innerHeight +
        this.actualiteElement.nativeElement.scrollHeight +
        this.conceptElement.nativeElement.scrollHeight +
        this.produitsElement.nativeElement.scrollHeight
      );
    }
  }

  setScroll() {
    if (window.scrollY <= window.innerHeight) {
      this.color = 'white';
      this.showHeader = false;
    } else if (window.scrollY <
      window.innerHeight +
      this.actualiteElement.nativeElement.scrollHeight
    ) {
      this.color = 'white';
      this.showHeader = true;
    } else if (window.scrollY <
      window.innerHeight +
      this.actualiteElement.nativeElement.scrollHeight +
      this.conceptElement.nativeElement.scrollHeight - 158
    ) {
      this.color = 'blue';
      this.showHeader = true;
    } else if (window.scrollY <
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
