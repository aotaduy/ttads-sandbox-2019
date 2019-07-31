import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.less']
})
export class ArticleListComponent implements OnInit {

  articles = [];
  selectedArticle: any = null;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.loadArticles();
  }

  private loadArticles() {
    this.httpClient.get('https://conduit.productionready.io/api/articles')
      .subscribe((response: any) => this.articles = response.articles);
  }

  onArticleRowClicked(article: any) {
    this.selectedArticle = article;
  }
}
