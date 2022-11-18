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
  l_news: any;
  list_news: Array<News> = []; // esta variable contiene todas las noticias de la petición
  constructor(private newsService: NewsService) {
    console.log("dentro de constructor: app.component");

    this.newsService.news$.subscribe(data =>{

      this.list_news = data
      console.log("dentro de constructor: data");
      console.log(data);
      console.log("dentro de constructor: list_news");
      console.log(this.list_news);
    });

  }

  ngOnInit(): void {
    setInterval(()=>{
      this.newsService.getNews();
    },30000);
  }


  ;
}
