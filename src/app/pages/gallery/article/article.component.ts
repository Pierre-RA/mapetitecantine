import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.article = {
      slug: this.activatedRoute.snapshot.params.slug,
      title: 'Vernissage 4 octobre 2017',
      image: 'url(\'http://via.placeholder.com/1920?text=Vernissage+4+octobre+2017\')'
    }
  }

  ngOnInit() {
  }

  getColor() {
    return 'white';
  }

}

interface Article {
  slug: string;
  title: string;
  image: string;
}
