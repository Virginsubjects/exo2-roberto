import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
 
  public currentFilm: number;

  films = [
    {
      name: 'Inglorious bastards',
      src : "assets/1.jpg",
    },
    {
      name :'Titanic',
      src : "assets/2.jpg",
    },
    {
      name : 'Orange mecanique',
      src: "assets/3.jpg",
    },
    {
      name : 'Pulp fiction',
      src: "assets/4.png",
    },
    {
      name : 'Spiderman 3',
      src: "assets/5.jpg",
    }
  ]
  constructor() { 
    this.currentFilm = 5;
  }

  showDetailsFilm(index: number) {
    this.currentFilm = index;

  }
}
