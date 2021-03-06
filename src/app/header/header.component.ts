import { Component, OnInit } from '@angular/core';
import { DatashareService } from '../datashare.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public searchTerm:string='';


  constructor(private ser5:DatashareService) { }

  ngOnInit(): void {
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.ser5.search.next(this.searchTerm);
  }

}
