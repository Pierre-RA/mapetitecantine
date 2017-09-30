import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
