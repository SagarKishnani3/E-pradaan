import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NgoComponent } from './ngo/ngo.component';


const routes:Routes=[
  {
    path:"home",component:HomeComponent
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
