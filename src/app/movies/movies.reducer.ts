import { createReducer, on, Action } from '@ngrx/store';
import * as MoviesActions from './movies.actions';

export interface Movie {
  name: string;
  year: string;
}

export interface State {
  movies: Movie[];
}

export const initialState: State = {movies: []};

const _moviesReducer = createReducer(
  initialState,
  on(MoviesActions.loadMoviesSuccess, (state, {movies}) => ({ ...state, movies}))
);

export function moviesReducer(state: State | undefined, action: Action) {
  return _moviesReducer(state, action);
}