import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FacebookComponent } from './facebook.component';
import { HeaderModule } from '../../templates/header/header.module';
import { FeedModule } from '../../templates/facebook/feed/feed.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FeedModule,
    RouterModule.forChild([
      { path: '', component: FacebookComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [FacebookComponent]
})
export class FacebookModule { }
