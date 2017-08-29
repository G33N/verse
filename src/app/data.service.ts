import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  data = {
    "HEADER": {
      "BACKGROUND": "../../assets/img/intro1.jpg"
    },
    "GALLERY": {
      "LEFT": {
        "IMAGE": "../assets/img/gallery-left1.jpg",
        "NAME": "Noelia Saraco",
        "URL": ""
      },
      "RIGHT1": {
        "IMAGE": "../assets/img/gallery-right11.jpg",
        "NAME": "Noelia Saraco",
        "URL": ""
      },
      "RIGHT2": {
        "IMAGE": "../assets/img/gallery-right12.jpg",
        "NAME": "Noelia Saraco",
        "URL": ""
      }
    }
  };

  // function
  myData(){
    return this.data;
  }
}
