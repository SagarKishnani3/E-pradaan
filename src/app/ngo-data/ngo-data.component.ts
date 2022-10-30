import { Component, OnInit } from '@angular/core';
import { NgoService } from '../ngo.service';
import { Ngo } from '../shared/interfaces/ngo.interfaces';


@Component({
  selector: 'app-ngo-data',
  templateUrl: './ngo-data.component.html',
  styleUrls: ['./ngo-data.component.css']
})
export class NgoDataComponent implements OnInit {
  ngos!:Ngo[]
  constructor(private ngoService:NgoService) { }

  ngOnInit(): void {
    this.getngoDetails()
  }
  getngoDetails(){
    this.ngos=this.ngoService.fetchDetail()
  }

}
