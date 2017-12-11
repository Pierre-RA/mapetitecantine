import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import { GalleryService } from '../gallery.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ListComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ListComponent],
  providers: [GalleryService]
})
export class ListModule { }
