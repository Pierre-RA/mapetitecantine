import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { NgxPageScrollModule } from 'ngx-page-scroll';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { HeaderModule } from './templates/header/header.module';

import { ColorService } from './services/color.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    NgxPageScrollModule,
    NotFoundModule,
    HeaderModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './pages/landing/landing.module#LandingModule', pathMatch: 'full'},
      { path: 'maintenance', loadChildren: './pages/maintenance/maintenance.module#MaintenanceModule', pathMatch: 'full'},
      { path: 'gallery', loadChildren: './pages/gallery/gallery.module#GalleryModule', pathMatch: 'full'},
      { path: 'galerie', loadChildren: './pages/gallery/gallery.module#GalleryModule', pathMatch: 'full'},
      { path: 'galerie/:slug', loadChildren: './pages/gallery/item/item.module#ItemModule'},
      { path: '**', component: NotFoundComponent }
    ])
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
