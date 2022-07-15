import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  public tech:any=[];
  public searchKey:string ="";


  constructor(private ser3:DatashareService) { }

  ngOnInit(): void {
    this.getallTechNews();

    this.ser3.search.subscribe((val:any) =>{
      this.searchKey = val;
    });
  }

  getallTechNews(){
    this.ser3.getTechNews().subscribe((res:any)=>{
      console.log(res.articles);
      this.tech=res.articles;
    })
  }

}
