import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

import { WelcomeComponent } from './welcome.component';
import { routing } from './welcome.routing';

import { TopModule } from '../../templates/top/top.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    TopModule,
    Ng2PageScrollModule
  ],
  declarations: [WelcomeComponent]
})
export class WelcomeModule { }
