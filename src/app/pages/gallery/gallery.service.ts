import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Picture } from '../../shared';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GalleryService {

  private wpBase = environment.wpBase;

  constructor(private http: HttpClient) { }

  getPictureList(): Observable<Array<Picture>> {
    return this.http.get<Array<Picture>>(this.wpBase + 'posts?categories=galerie');
  }

  getPicture(slug: string): Observable<Picture> {
    return this.http.get<Picture>(this.wpBase + `posts?slug=${slug}`);
  }

}
