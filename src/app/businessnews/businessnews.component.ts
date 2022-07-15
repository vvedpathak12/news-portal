import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-businessnews',
  templateUrl: './businessnews.component.html',
  styleUrls: ['./businessnews.component.css']
})
export class BusinessnewsComponent implements OnInit {

  public business:any=[];
  public searchKey:string ="";

  constructor(private ser2:DatashareService) { }

  ngOnInit(): void {
    this.getallBusinessNews();

    this.ser2.search.subscribe((val:any) =>{
      this.searchKey = val;
    });
  }

  getallBusinessNews(){
    this.ser2.getBusinessNews().subscribe((res:any)=>{
      console.log(res.articles);
      this.business=res.articles;
    })
  }

}
