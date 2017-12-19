import { Component, OnInit, OnDestroy } from '@angular/core';

import { FacebookFeed, FacebookPost } from '../../../shared';
import { FacebookService } from '../facebook.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-facebook-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

  feed: FacebookFeed;
  feedSub: Subscription;

  constructor(
    private facebookService: FacebookService
  ) {
    this.feedSub = this.facebookService.getFeed().subscribe(data => {
      console.log(data);
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
