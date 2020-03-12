import { Component, OnInit } from '@angular/core';
import { Movie } from './movies.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-ngrx-page',
  template: `
    <h1>movies Ngrx 2</h1>
    {{movies}}
    <!-- <div *ngFor="let movie of movies$ | async">
      henk
      {{movie.name}}
    </div> -->
  `
})
export class MoviesPageNgrxComponent implements OnInit {
  // movies$ = this.store.pipe(select('movies'));
  movies
  // movies$: Observable<Movie[]> = this.store.select(state => state.movies)
  // movies$ = this.store.select(state => state).subscribe(movies => {
  //   this.movies = movies
  //   console.log('%%%%%%%%%%%%%%%%%%%%%%%');
  //   console.log(movies)
  //   })

  constructor(private store: Store<{movies: Movie}>) {
    // console.log(store.movies);
    console.log('*******************')
    this.store.select('movies').subscribe(movies => {
      this.movies = movies
      console.log('%%%%%%%%%%%%%%%%%%%%%%%');
      console.log(movies)
    })
  }
  
  ngOnInit(){
    this.store.dispatch({type: '[Movies Page] Load Movies'});
    console.log()
  }
}