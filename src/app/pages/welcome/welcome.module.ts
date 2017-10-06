import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';

import { DotModule } from '../../templates/dot/dot.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    DotModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
