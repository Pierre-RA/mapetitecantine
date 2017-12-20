import { Component, OnInit, Input } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  @Input('color') color: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;

  constructor() {
    this.facebookLink = environment.facebookLink;
    this.twitterLink = environment.twitterLink;
    this.instagramLink = environment.instagramLink;
  }

  ngOnInit() {
  }

}
