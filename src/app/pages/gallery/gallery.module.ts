import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';

import { PageModule } from '../../templates/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    PageModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
