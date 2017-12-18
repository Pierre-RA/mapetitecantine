import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { GalleryService } from '../gallery.service';
import { BreadcrumbModule } from '../../../templates/breadcrumb/breadcrumb.module';
import { ImageModule } from '../../../templates/image/image.module';
import { HeaderModule } from '../../../templates/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    ImageModule,
    HeaderModule,
    RouterModule.forChild([
      { path: '', component: ListComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ListComponent],
  providers: [GalleryService]
})
export class ListModule { }
