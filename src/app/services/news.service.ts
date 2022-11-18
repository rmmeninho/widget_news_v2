import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { News } from '../model/news/news-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  list_news: Array<News> = [];
  l_news: any;
  private news = new Subject<Array<News>>();
  public news$ = this.news.asObservable();

  constructor(private http: HttpClient) {
    console.log('Servicio Http: ');

  }

  // News API
  // Método que hace la petición a la API Rest NewsAPI
/*
  getNews(): Observable<any>{
    let date: string = new Date().toISOString();
    console.log(date);
    let day = date.substring(0,10);
    console.log("day: "+ day);
    let toret: string = 'https://newsapi.org/v2/everything?q=galicia&from='+day+'&sortBy=publishedAt&apiKey=0dc3db21fb1c4a7daf0a7a6fc6247c2b';
    console.log(toret);

    return this.http.get(toret);
  }
*/
  updateNews = () =>{
    console.log("dentro de updateNews: updateNews.service");
    console.log(this.list_news);

    this.news.next(this.list_news);
  }

// JasonPlaceHolder
// Descomentar el siguiente método para hacer uso de la API Rest Jason Place Holder

  getNews = () =>{


    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next: (result: any) => {
        console.log("dentro de getNews: result");
        console.log(result);
        let aux: News ={
          title: "",
          description: "",
          image: ""
        }
        for(let i = 0; i < 10; i++){
          aux = {
            title: result[i].title,
            description: result[i].description,
            image: result[i].thumbnailUrl,
          }
          this.list_news.push(aux);
          //console.log("dentro de getNews: se le pasa a aux");
          //console.log(result[i]);
          //console.log("dentro de getNews: se le pasa a aux");
          aux.description = result[i].id;
          aux.title = result[i].title;
          aux.image = result[i].thumbnailUrl;
          //console.log("dentro de getNews: aux");
          //console.log(aux);
          //console.log("dentro de getNews: aux");
          /*this.list_news.push({
            title: result[i].title,
            description: result[i].description,
            image: result[i].thumbnailUrl,
          });*/
          //console.log("dentro de getNews: list");
          //console.log(this.list_news);
          //console.log("dentro de getNews: list");
        }
        this.news.next(this.list_news);
      }
    })
  }


/*
getNews = () =>{
  let aux: News ={
    title: "",
    description: "",
    image: ""
  }

  this.http.get('https://jsonplaceholder.typicode.com/photos')
    .subscribe({
      next: (data: any) =>{
      console.log("dentro de getNews: data");
      console.log(data[0].title);
      console.log(typeof data[0].title);
      console.log(typeof data[0]);
      console.log(typeof this.list_news[0]);


      //this.list_news[0] = new Object(data[0].title, data[0].id ,data[0].thumbnailUrl);

      console.log("dentro de getNews: aux");
      console.log(aux);
      console.log(typeof aux);
      aux.title = data[0].title;
      aux.description = data[0].id;
      aux.image = data[0].thumbnailUrl;
      console.log("dentro de getNews: aux_2");
      console.log(aux);
      this.list_news.push(aux);
      console.log("dentro de getNews: list_news");
      console.log(this.list_news);
      }

    })
}
*/
}

