import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detail } from './shared/interfaces/search.interfaces';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  getDetailById(id: number) {
    return this.Details.filter((value:any)=>value.id==id)[0];
  }
  Details: Detail[]=[{
    "id":1,
    "ngo_name": "SASTRA Deemed University",
    "district": "Pond",
    "city": "Piritiba",
    "location": "Londonderry",
    "contact": "6775614489"
  }, {
    "id":2,
    "ngo_name": "St. Petersburg College",
    "district": "Browning",
    "city": "Kiarajangkung",
    "location": "Del Mar",
    "contact": "7309130243"
  }, {
    "id":3,
    "ngo_name": "Pontificia Universidad Catolica de Puerto Rico",
    "district": "Mccormick",
    "city": "Jiukeng",
    "location": "Darwin",
    "contact": "5100700424"
  }, {
    "id":4,
    "ngo_name": "Community College of Denver",
    "district": "Lyons",
    "city": "Challhuahuacho",
    "location": "Lakewood Gardens",
    "contact": "8172195176"
  }, {
    "id":5,
    "ngo_name": "Kuvempu University",
    "district": "Lakeland",
    "city": "Sanghan",
    "location": "Montana",
    "contact": "3345600935"
  }, {
    "id":6,
    "ngo_name": "Kennesaw State University",
    "district": "Swallow",
    "city": "Přimda",
    "location": "Russell",
    "contact": "8077158617"
  }, {
    "id":7,
    "ngo_name": "Kyonggi University",
    "district": "Shoshone",
    "city": "Fuyo",
    "location": "Gina",
    "contact": "9020239864"
  }, {
    "id":8,
    "ngo_name": "Université Dakar Bourguiba",
    "district": "Red Cloud",
    "city": "Lewotukan",
    "location": "Reinke",
    "contact": "3318266809"
  }, {
    "id":9,
    "ngo_name": "Ecole Supérieure de Commerce de Lille",
    "district": "Sundown",
    "city": "Shigu",
    "location": "International",
    "contact": "8720041950"
  }, {
    "id":10,
    "ngo_name": "Phillips Graduate Institute",
    "district": "Straubel",
    "city": "Dingbao",
    "location": "Sutteridge",
    "contact": "6065905763"
  }, {
    "id":11,
    "ngo_name": "Latvian Academy of Culture",
    "district": "Lotheville",
    "city": "Polanica-Zdrój",
    "location": "La Follette",
    "contact": "5615677120"
  }, {
    "id":12,
    "ngo_name": "Universidad Santa Maria Caracas",
    "district": "Ilene",
    "city": "Neuquén",
    "location": "Huxley",
    "contact": "5595423404"
  }, {
    "id":13,
    "ngo_name": "Universidad de Puerto Rico, Humacao",
    "district": "Dahle",
    "city": "Zhoushizhuang",
    "location": "Porter",
    "contact": "9582671815"
  }, {
    "id":14,
    "ngo_name": "Randolph-Macon Woman's College",
    "district": "Walton",
    "city": "Shangtang",
    "location": "Northridge",
    "contact": "4994495394"
  }, {
    "id":15,
    "ngo_name": "Universitas Advent Indonesia",
    "district": "Carpenter",
    "city": "Zhishan",
    "location": "4th",
    "contact": "7282165424"
  }, {
    "id":16,
    "ngo_name": "University of Berne",
    "district": "Clove",
    "city": "Mangga Dua",
    "location": "Trailsway",
    "contact": "1548292729"
  }, {
    "id":17,
    "ngo_name": "National University of Laos",
    "district": "Upham",
    "city": "Handegate",
    "location": "Mallory",
    "contact": "3566126101"
  }, {
    "id":18,
    "ngo_name": "University of the Sacred Heart Tokyo",
    "district": "Pierstorff",
    "city": "Kodinsk",
    "location": "Ilene",
    "contact": "8787966794"
  }, {
    "id":19,
    "ngo_name": "St. Matthews University",
    "district": "Blaine",
    "city": "Nouméa",
    "location": "Becker",
    "contact": "5355006779"
  }, {
    "id":20,
    "ngo_name": "Universidade Santa Cecília dos Bandeirantes",
    "district": "Sunfield",
    "city": "Douniani",
    "location": "Merrick",
    "contact": "6586776570"
  }, {
    "id":21,
    "ngo_name": "University of Indianapolis in Athens",
    "district": "Eggendart",
    "city": "Balaka",
    "location": "4th",
    "contact": "2301238067"
  }, {
    "id":22,
    "ngo_name": "Seian University of Art & Design",
    "district": "Dakota",
    "city": "Jishi",
    "location": "Melrose",
    "contact": "9458689449"
  }, {
    "id":23,
    "ngo_name": "Soka University of America",
    "district": "Declaration",
    "city": "Longtang",
    "location": "Armistice",
    "contact": "1030812276"
  }, {
    "id":24,
    "ngo_name": "East-Siberian State University",
    "district": "Pond",
    "city": "Puunage",
    "location": "Manley",
    "contact": "9209106636"
  }, {
    "id":25,
    "ngo_name": "National Institute of Technology, Trichy",
    "district": "Anhalt",
    "city": "Tauca",
    "location": "Spenser",
    "contact": "7778497875"
  }, {
    "id":26,
    "ngo_name": "King's College",
    "district": "Meadow Vale",
    "city": "Oelaba",
    "location": "La Follette",
    "contact": "6497451056"
  }, {
    "id":27,
    "ngo_name": "Notre Dame of Marbel University",
    "district": "Melody",
    "city": "Halden",
    "location": "Sugar",
    "contact": "9936891856"
  }, {
    "id":28,
    "ngo_name": "Lake Superior State University",
    "district": "Banding",
    "city": "Penghu",
    "location": "Scofield",
    "contact": "4272709356"
  }, {
    "id":29,
    "ngo_name": "Ahmedabad University",
    "district": "Summerview",
    "city": "Västerås",
    "location": "Hanson",
    "contact": "8636911303"
  }, {
    "id":30,
    "ngo_name": "Buckinghamshire New University",
    "district": "Gale",
    "city": "Krajan Keboromo",
    "location": "Vera",
    "contact": "5607845818"
  }]
  fetchDetail():Detail[]{
    return this.Details
  }
  constructor(private http:HttpClient) { }


  addQuiz(content :any):any{
    return this.http.post("http://localhost:8080/api/addQuiz",content)
  }

  
  fetchQuiz(){
    return this.http.get("http://localhost:8080/api/student")
  }
}
