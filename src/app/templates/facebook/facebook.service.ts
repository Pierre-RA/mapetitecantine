import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FacebookFeed, FacebookPost } from '../../shared';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FacebookService {

  private url: string;

  constructor(
    private http: HttpClient
  ) {
    this.url = environment.facebookUrl;
  }

  getFeed(): Observable<Array<FacebookPost>> {
    return this.http.get<FacebookFeed>(this.url)
      .map(res => res.data.filter(post => post.link));
  }

  getFeedPost(id): Observable<FacebookPost> {
    return this.http.get<FacebookPost>(this.url + '/' + id);
  }

}
