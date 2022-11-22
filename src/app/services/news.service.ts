import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { NewsApi } from '../model/newsApi/newsApi-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  list_news: Array<NewsApi> = [];

  private news = new Subject<Array<NewsApi>>();
  public news$ = this.news.asObservable();

  constructor(private http: HttpClient) {
    console.log('Servicio Http: ');
  }

  // News API
  // Método que hace la petición a la API Rest NewsAPI

  getNews = (limit: number) =>{

    this.list_news = [];
    let date: string = new Date().toISOString();
    console.log(date);
    let day = date.substring(0,10);
    console.log("day: "+ day);
    //this.http.get<any>(`https://newsapi.org/v2/everything?q=galicia&from=${day}&sortBy=publishedAt&pagesize=${limit}&apiKey=0dc3db21fb1c4a7daf0a7a6fc6247c2b`)
    this.http.get<any>('/assets/noticias.json')
      .pipe(
        map((result) =>{
          return result.articles.map((item: NewsApi)=>{
            return{
              title: item.title,
              description: item.description,
              urlToImage: item.urlToImage
            }
          });
        })
      )
      .subscribe((data: Array<NewsApi>) =>{
        console.log(data);
        this.list_news = data;
        this.news.next(this.list_news);
      }
    )
  }
}
