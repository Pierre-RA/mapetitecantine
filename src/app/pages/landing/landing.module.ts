import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LandingComponent } from './landing.component';
import { ImageModule } from '../../templates/image/image.module';

import { GalleryService } from '../gallery/gallery.service';

@NgModule({
  imports: [
    CommonModule,
    ImageModule,
    RouterModule.forChild([
      { path: '', component: LandingComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [LandingComponent],
  providers: [GalleryService]
})
export class LandingModule { }
