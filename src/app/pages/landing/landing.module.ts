import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { LandingComponent } from './landing.component';
import { ImageModule } from '../../templates/image/image.module';
import { TitleModule } from '../../templates/title/title.module';
import { HeaderModule } from '../../templates/header/header.module';

import { GalleryService } from '../gallery/gallery.service';
import { PageService } from './page.service';

@NgModule({
  imports: [
    CommonModule,
    ImageModule,
    TitleModule,
    HeaderModule,
    AgmCoreModule,
    RouterModule.forChild([
      { path: '', component: LandingComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [LandingComponent],
  providers: [GalleryService, PageService]
})
export class LandingModule { }
