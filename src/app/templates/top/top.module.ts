import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { TopComponent } from './top.component';
import { DotModule } from '../dot/dot.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DotModule
  ],
  declarations: [TopComponent],
  exports: [TopComponent]
})
export class TopModule { }
