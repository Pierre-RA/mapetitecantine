import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { HeaderModule } from './templates/header/header.module';
import { TitleModule } from './templates/title/title.module';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr-CH';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPageScrollModule,
    NotFoundModule,
    HeaderModule,
    TitleModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './pages/landing/landing.module#LandingModule', pathMatch: 'full'},
      { path: 'maintenance', loadChildren: './pages/maintenance/maintenance.module#MaintenanceModule', pathMatch: 'full'},
      { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryModule', pathMatch: 'full'},
      { path: 'galerie', loadChildren: './pages/gallery/gallery.module#GalleryModule', pathMatch: 'full'},
      { path: 'galerie/:slug', loadChildren: './pages/gallery/item/item.module#ItemModule'},
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'fr-CH'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
