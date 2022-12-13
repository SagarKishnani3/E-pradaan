import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  websiteList = ['NGo', 'FundRaiser'];

  constructor(private setService:SearchService) {}

  ngOnInit(): void {
     this.fetch()
  }


  fetch() {
    this.setService.fetchQuiz().subscribe((val: any) => {
      console.log(val);
    });
  }
}
