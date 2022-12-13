import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Detail } from '../shared/interfaces/search.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Details!:Detail[]

  constructor(private searchService:SearchService, private router: Router) { }
  searchText: any;
  ngOnInit(): void {
    this.getDataDetails()
  }
  getDataDetails() {
    this.Details=this.searchService.fetchDetail()
  }

  navigate(Detail:any):void{
    this.router.navigate(
      ['/show-details', Detail.id] 
  ); 
  }

}
