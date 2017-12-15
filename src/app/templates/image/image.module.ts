import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ImageComponent } from './image.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ImageComponent],
  exports: [ImageComponent]
})
export class ImageModule { }
