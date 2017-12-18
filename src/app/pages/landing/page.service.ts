import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Page } from '../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  private wpBase = environment.wpBase;

  constructor(private http: HttpClient) { }

  getPage(slug: string): Observable<Page> {
    return this.http.get<Page>(this.wpBase + 'pages?slug=' + slug)
      .map(data => data[0]);
  }

}
