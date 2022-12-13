import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgoComponent } from './ngo/ngo.component';
import { NgoDataComponent } from './ngo-data/ngo-data.component';
import { FundRaiserDataComponent } from './fund-raiser-data/fund-raiser-data.component';
import { FundRaiserComponent } from './fund-raiser/fund-raiser.component';
import { DonorFormComponent } from './donor-form/donor-form.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShowMoreDetailsComponent } from './show-more-details/show-more-details.component';
import { SearchComponent } from './search/search.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { SearchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    GalleryComponent,
    ContactusComponent,
    NgoComponent,
    NgoDataComponent,
    FundRaiserDataComponent,
    FundRaiserComponent,
    DonorFormComponent,
    ShowMoreDetailsComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule ,
     FormsModule,
     Ng2SearchPipeModule,
     GooglePayButtonModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
