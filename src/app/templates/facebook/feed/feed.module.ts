import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { FacebookService } from '../facebook.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FacebookService]
})
export class FeedModule { }
