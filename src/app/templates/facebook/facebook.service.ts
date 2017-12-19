import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FacebookFeed, FacebookPost } from '../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class FacebookService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    // this.url = '/api/feed';
    this.url = 'http://demo6112386.mockable.io/feed';
  }

  getFeed() {
    return this.http.get<FacebookFeed>(this.url)
      .map(res => res.data.filter(post => post.link));
  }

  getFeedPost(id): Observable<FacebookPost> {
    return this.http.get<FacebookPost>(this.url + '/' + id);
  }

}
