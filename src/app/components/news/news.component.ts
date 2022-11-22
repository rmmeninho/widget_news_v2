import { Component, Input, OnInit } from '@angular/core';
import { count } from 'rxjs';
import { News } from 'src/app/model/news/news-model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  list_news: Array<News> = []; // esta variable contiene todas las noticias de la petición
  state: boolean = true; // variable que alterna los paneles de las noticias
  flow_news: number[] = [0,1];
  actualize_news: boolean = false; // bandera que es true cuando hay noticias nuevas
  count_news: number = 1;

  @Input() set list_News(item: Array<News>){ // se reciben nuevas noticias desde app.components
    this.actualize_news = true;
    this.list_news = item;

    if(this.actualize_news && this.count_news > 1){ // condición para saltar el start de la app, sino la 1º noticia sale duplicada
      this.count_news = this.list_news.length; // directamente ponemos el contador al límite para que el mismo se reinicie y haga los cambios en los paneles
    }

    this.actualize_news = false;
  };

  constructor() {
    console.log("news.component");
  }

  ngOnInit(): void {

    setInterval(()=>{
      this.state = !this.state;
      this.minusNews();
    },8000);
  }

  minusNews = () =>{

    this.count_news++;

    if(this.count_news > this.list_news.length){
      this.count_news = 1;
      (this.state?this.flow_news=[0,-1]:this.flow_news=[-1,0]);
    }

    (this.state?this.flow_news[1]+=2:this.flow_news[0]+=2);
  }
}
