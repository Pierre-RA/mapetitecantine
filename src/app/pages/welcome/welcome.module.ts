import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';

import { DotModule } from '../../templates/dot/dot.module';
import { TopModule } from '../../templates/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    DotModule,
    TopModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
