import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-top-headline',
  templateUrl: './top-headline.component.html',
  styleUrls: ['./top-headline.component.css']
})
export class TopHeadlineComponent implements OnInit {

  public topheadlines:any=[]

  public searchKey:string ="";

  constructor(private ser:DatashareService) { }

  ngOnInit(): void {
    this.getTopHead();

    this.ser.search.subscribe((val:any) =>{
      this.searchKey = val;
    });
  }

  getTopHead(){
    this.ser.getTopHeadlines().subscribe((res:any)=>{
      console.log(res.articles);
      this.topheadlines=res.articles;
    })
  }

}
