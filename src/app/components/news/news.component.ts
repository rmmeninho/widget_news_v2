import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/model/news/news-model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  list_news: Array<News> = []; // esta variable contiene todas las noticias de la petición
  state: boolean = true; // variable que alterna los paneles de las noticias
  indexNew: number = 0;
  new1: News = { title: '', description: '', image: '' };
  new2: News = { title: '', description: '', image: '' };


  @Input() set list_News(item: Array<News>){ // se reciben nuevas noticias desde app.components
    this.list_news = item;
    this.new1 = this.list_news[this.indexNew]
  }

  constructor() {
    console.log("news.component");
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.minusNews();
    },8000);
  }

  minusNews = () =>{

    this.state = !this.state;

    if(this.indexNew >= this.list_news.length - 1){
      this.indexNew = 0;
    }

    (this.state?
      this.new1 = this.list_news[this.indexNew]:
      this.new2 = this.list_news[this.indexNew + 1]);

    this.indexNew+=2;
  }
}
