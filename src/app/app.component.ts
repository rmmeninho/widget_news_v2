import { Component } from '@angular/core';
import { News } from './model/news/news-model';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'widget_news_v2';

  list_news: Array<News> = [];

  constructor(private newsService: NewsService) {

    this.newsService.news$.subscribe(data =>{
      this.list_news = data;
    });
  }

  ngOnInit(): void {

    this.newsService.getNews(11);
    setInterval(()=>{
      this.newsService.getNews(30);
    },900000);
  }
}
