import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { SocialModule } from '../social/social.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SocialModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
