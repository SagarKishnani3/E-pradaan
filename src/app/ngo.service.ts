import { Injectable } from '@angular/core';
import { Ngo } from './shared/interfaces/ngo.interfaces';


@Injectable({
  providedIn: 'root'
})
export class NgoService {
  ngos: Ngo[] =[{
    "id": 1,
    "first_name": "Griff",
    "last_name": "Bradd",
    "email": "gbradd0@yellowbook.com",
    "gender": "50001",
    "username": "gbradd0",
    "contact": "994-133-3896"
  }, {
    "id": 2,
    "first_name": "Antony",
    "last_name": "Tremathack",
    "email": "atremathack1@hugedomains.com",
    "gender": "11111",
    "username": "atremathack1",
    "contact": "253-646-9373"
  }, {
    "id": 3,
    "first_name": "Geoffry",
    "last_name": "Pretti",
    "email": "gpretti2@tiny.cc",
    "gender": "21111",
    "username": "gpretti2",
    "contact": "577-711-5321"
  }, {
    "id": 4,
    "first_name": "Bari",
    "last_name": "Yong",
    "email": "byong3@twitter.com",
    "gender": "63900",
    "username": "byong3",
    "contact": "951-157-1379"
  }, {
    "id": 5,
    "first_name": "Rhys",
    "last_name": "Howling",
    "email": "rhowling4@amazon.co.uk",
    "gender": "84000",
    "username": "rhowling4",
    "contact": "130-813-8195"
  }, {
    "id": 6,
    "first_name": "Ruddie",
    "last_name": "Paolicchi",
    "email": "rpaolicchi5@phoca.cz",
    "gender": "65200",
    "username": "rpaolicchi5",
    "contact": "427-390-5528"
  }, {
    "id": 7,
    "first_name": "Reeta",
    "last_name": "Anthoin",
    "email": "ranthoin6@cornell.edu",
    "gender": "100000",
    "username": "ranthoin6",
    "contact": "949-347-4123"
  }, {
    "id": 8,
    "first_name": "Vaughn",
    "last_name": "Dauby",
    "email": "vdauby7@senate.gov",
    "gender": "18000",
    "username": "vdauby7",
    "contact": "475-565-5288"
  }, {
    "id": 9,
    "first_name": "Gay",
    "last_name": "Dabourne",
    "email": "gdabourne8@biglobe.ne.jp",
    "gender": "10000",
    "username": "gdabourne8",
    "contact": "983-485-4647"
  }, {
    "id": 10,
    "first_name": "Pepita",
    "last_name": "Jasik",
    "email": "5000",
    "gender": "5000",
    "username": "pjasik9",
    "contact": "210-257-8130"
  }]
  fetchDetail():Ngo[]{
    return this.ngos
  }
  constructor() { }
}
