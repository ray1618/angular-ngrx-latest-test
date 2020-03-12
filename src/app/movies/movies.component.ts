import { Component, OnInit } from '@angular/core';
import { MoviesService, Movie } from './movies.service';

@Component({
  selector: 'app-movie-page',
  template: `
    <h1>movies</h1>
    <li *ngFor="let movie of movies">
      {{ movie.name }}
    </li>
  `
})
export class MoviesPageComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MoviesService) {}
  
  ngOnInit(){
    this.movieService.getAll().subscribe(movies => this.movies = movies);
  }
}