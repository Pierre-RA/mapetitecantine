import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from 'ng2-scroll-to';

import { PageComponent } from './page.component';

import { DotModule } from '../dot/dot.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DotModule,
    ScrollToModule,
  ],
  declarations: [PageComponent],
  exports: [PageComponent],
})
export class PageModule { }
