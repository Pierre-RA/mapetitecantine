import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { GalleryComponent } from './gallery.component';
import { routing } from './gallery.routing';

import { PageModule } from '../../templates/page/page.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    PageModule,
    Ng2PageScrollModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
