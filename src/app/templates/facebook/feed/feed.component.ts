import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { FacebookFeed, FacebookPost } from '../../../shared';
import { FacebookService } from '../facebook.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-facebook-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  feed: Array<FacebookPost>;
  feedSub: Subscription;
  isLoaded: boolean;
  @Input('limit') limit: number;

  constructor(
    private facebookService: FacebookService
  ) {
    this.isLoaded = false;
    this.feedSub = this.facebookService.getFeed().subscribe(data => {
      this.isLoaded = true;
      this.feed = data;
      console.log(this.feed);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.feedSub) {
      this.feedSub.unsubscribe();
    }
  }

}
