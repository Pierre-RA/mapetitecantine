import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ItemComponent } from './item.component';
import { GalleryService } from '../gallery.service';
import { BreadcrumbModule } from '../../../templates/breadcrumb/breadcrumb.module';
import { HeaderModule } from '../../../templates/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbModule,
    HeaderModule,
    RouterModule.forChild([
      { path: '', component: ItemComponent }
    ])
  ],
  declarations: [ItemComponent],
  providers: [GalleryService]
})
export class ItemModule { }
