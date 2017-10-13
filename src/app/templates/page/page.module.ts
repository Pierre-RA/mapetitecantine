import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { PageComponent } from './page.component';

import { DotModule } from '../dot/dot.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DotModule,
    Ng2PageScrollModule,
  ],
  declarations: [PageComponent],
  exports: [PageComponent],
})
export class PageModule { }
