import { Component, OnInit } from '@angular/core';
import { FundraiserService } from '../fundraiser.service';
import { Fundraiser } from '../shared/interfaces/fundraiser.interfaces';

@Component({
  selector: 'app-fund-raiser-data',
  templateUrl: './fund-raiser-data.component.html',
  styleUrls: ['./fund-raiser-data.component.css']
})
export class FundRaiserDataComponent implements OnInit {
  fundraisers!:Fundraiser[]
  constructor(private fundraiserService:FundraiserService) { }

  ngOnInit(): void {
    this.getFundraiserDetails()
  }

  getFundraiserDetails(){
    this.fundraisers=this.fundraiserService.fetchDetail()
  }
}
