import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Picture } from '../../shared';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GalleryService {

  private wpBase = environment.wpBase;
  private galleryID = environment.galleryID;

  constructor(private http: HttpClient) { }

  getPictureList(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(
      this.wpBase + 'posts?categories=' + this.galleryID
    );
  }

  getPicture(slug: string): Observable<Picture> {
    return this.http.get<Picture>(this.wpBase + 'posts?slug=' + slug)
      .map(data => data[0]);
  }

  getLastPicture(): Observable<Picture> {
    return this.http.get<Picture>(
      this.wpBase + 'posts?categories=' + this.galleryID +
      '&orderby=date&order=desc&per_page=1'
    ).map(data => data[0]);
  }

}
