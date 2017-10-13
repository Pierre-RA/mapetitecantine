import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DotModule } from '../templates/dot/dot.module';
import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    routing,
    DotModule
  ],
  declarations: [PagesComponent]
})
export class PagesModule { }
