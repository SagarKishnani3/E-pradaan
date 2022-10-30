import { Component, OnInit } from '@angular/core';
import{} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images=["assets/images/slider/slider-3.jpg","assets/images/slider/slider-2.jpg","assets/images/slider/slider-1.jpg"]
  constructor() { }
  icons=[]

  ngOnInit(): void {
  }

}
