import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  public search = new BehaviorSubject("");

  constructor(private http:HttpClient ) { }

  //top-headlines api url

  topHeadlinesNews= "https://newsapi.org/v2/top-headlines?country=in&apiKey=980a393c2ef541ab88ebdd84dff05f23";

  getTopHeadlines(){
    return this.http.get(this.topHeadlinesNews);
  }

  //business news

  businessnews= "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=980a393c2ef541ab88ebdd84dff05f23";

  getBusinessNews(){
    return this.http.get(this.businessnews);
  }

  //technews

  technews= "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=980a393c2ef541ab88ebdd84dff05f23";

  getTechNews(){
    return this.http.get(this.technews);
  }

  //sports news

  sportnews= "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=980a393c2ef541ab88ebdd84dff05f23";

  getSportNews(){
    return this.http.get(this.sportnews);
  }

  
}
