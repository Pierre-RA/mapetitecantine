import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DotComponent } from './dot.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DotComponent],
  exports: [DotComponent],
})
export class DotModule { }
