import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgoComponent } from './ngo/ngo.component';
import { NgoDataComponent } from './ngo-data/ngo-data.component';
import { FundRaiserComponent } from './fund-raiser/fund-raiser.component';
import { FundRaiserDataComponent } from './fund-raiser-data/fund-raiser-data.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { ShowMoreDetailsComponent } from './show-more-details/show-more-details.component';
import { SearchComponent } from './search/search.component';


const routes:Routes=[
  {
    path:"home",component:HomeComponent
  },
  {
    path:"search",component:SearchComponent
  },
  {
    path:"aboutus",component:AboutusComponent
  },
  {
    path:"services",component:ServicesComponent
  },
  {
    path:"gallery",component:GalleryComponent
  },
  {
    path:"contactus",component:ContactusComponent
  },
  {
    path:"ngo",component:NgoComponent
  },
  {
    path:"fundRaiser",component:FundRaiserComponent
  },
  {
    path:"",redirectTo:"home",pathMatch:"full"
  },
  {
    path:"ngo-data",component:NgoDataComponent
  },
  {
    path:"fund-raiser-data",component:FundRaiserDataComponent
  },
  {
    path:"donor-form",component:DonorFormComponent
  },
  {
    path:"show-details/:id",component:ShowMoreDetailsComponent
  }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
