import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { routing } from './article.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [ArticleComponent]
})
export class ArticleModule { }
