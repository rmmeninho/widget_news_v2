import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/model/news/news-model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  list_news: Array<News> = []; // esta variable contiene todas las noticias de la petición
  cont_news: number = 0;  // contador de noticias
  state: boolean = true; // variable de control para los métodos showNotice y hiddenNotice

  @Input() set News(news: Array<News>){
    this.list_news = news;
  }
  constructor() {
    console.log('El componente se ha creado');
  }

  ngOnInit(): void {
    console.log("dentro de ngOnInit: news.component");
      console.log(this.list_news);
    setInterval(()=>{
      this.state = !this.state;
      if(this.cont_news > this.list_news.length-1){
        this.cont_news = 0;
      }
      else{
        this.cont_news++;
      }
    },5000);
  }

}
