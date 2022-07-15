import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-sportnews',
  templateUrl: './sportnews.component.html',
  styleUrls: ['./sportnews.component.css']
})
export class SportnewsComponent implements OnInit {

  public sports:any=[];
  public searchKey:string ="";


  constructor(private ser4:DatashareService) { }

  ngOnInit(): void {
    this.getallSportNews();

    this.ser4.search.subscribe((val:any) =>{
      this.searchKey = val;
    });
  }

  getallSportNews(){
    this.ser4.getSportNews().subscribe((res:any)=>{
      console.log(res.articles);
      this.sports=res.articles;
    })
  }

}
