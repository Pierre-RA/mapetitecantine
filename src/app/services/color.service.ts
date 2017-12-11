import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ColorService {

  color: string;
  sub: BehaviorSubject<string>;

  constructor() {
    this.color = 'white';
    this.sub = new BehaviorSubject<string>(this.color);
  }

  setColor(color: string) {
    this.sub.next(color);
  }

  getColor() {
    return this.sub.asObservable();
  }

}
