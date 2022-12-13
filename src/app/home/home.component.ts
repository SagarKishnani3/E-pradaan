import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{} from '@fortawesome/free-solid-svg-icons';
import { SearchService } from '../search.service';
import { Detail } from '../shared/interfaces/search.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images=["assets/images/slider/slider-3.jpg","assets/images/slider/slider-2.jpg","assets/images/slider/slider-1.jpg"]
  Details!:Detail[]
  constructor(private searchService:SearchService, private router: Router) { 
  }
  icons=[]
  searchText: any;
  // heroes = [
  //   { id: 11, name: 'Mr. Nice', state: 'India' },
  //   { id: 12, name: 'Narco' , state: 'USA'},
  //   { id: 13, name: 'Bombasto' , state: 'UK'},
  //   { id: 14, name: 'Celeritas' , state: 'Canada' },
  //   { id: 15, name: 'Magneta' , state: 'Russia'},
  //   { id: 16, name: 'RubberMan' , state: 'China'},
  //   { id: 17, name: 'Dynama' , state: 'Germany'},
  //   { id: 18, name: 'Dr IQ' , state: 'Hong Kong'},
  //   { id: 19, name: 'Magma' , state: 'South Africa'},
  //   { id: 20, name: 'Tornado' , state: 'Sri Lanka'}
  // ];

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
