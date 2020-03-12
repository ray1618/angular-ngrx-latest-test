import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { counterReducer, scoreboardFeatureKey } from './counter/counter.reducer';
import { moviesReducer } from './movies/movies.reducer';

import { CounterComponent} from './counter/counter.component';
import { MoviesPageComponent } from './movies/movies.component';
import { MoviesPageNgrxComponent } from './movies/moviesNgrx.component';

import { MovieEffects } from './movies/movies.effects';



export const metaReducers: MetaReducer<any>[] = [debug];

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    console.log('state', state);
    console.log('action', action);
 
    return reducer(state, action);
  };
}

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    EffectsModule.forRoot([MovieEffects]),
    // metaRuducers is vergelijkbaar met middleware. Hier gooi je alle reducers erdoorheen
    StoreModule.forRoot({ count: counterReducer, movies: moviesReducer}, { metaReducers }) 
    // StoreModule.forFeature(scoreboardFeatureKey, counterReducer) 
    ],
  declarations: [ AppComponent, HelloComponent, CounterComponent, MoviesPageComponent, MoviesPageNgrxComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
