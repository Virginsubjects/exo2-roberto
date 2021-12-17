import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from './films/film.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  

  public films: any[] = [];
  public currentFilm: number;
  public status = false;

  constructor(private filmService : FilmService) {
    this.currentFilm = 5;
   }

  ngOnInit(): void {
    this.films = this.filmService.films;
    this.currentFilm = this.filmService.currentFilm;
  }

  onSwitchOn(index : number){
    this.filmService.showDetailsFilm(index);
    this.currentFilm = this.filmService.currentFilm;
    this.status = true;
    
  }
}
