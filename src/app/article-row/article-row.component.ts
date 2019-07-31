import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-article-row',
  templateUrl: './article-row.component.html',
  styleUrls: ['./article-row.component.less']
})
export class ArticleRowComponent implements OnInit {
  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
