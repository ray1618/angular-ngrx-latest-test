import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Movie {
  title: string;
  year: number;
}

@Injectable({
  providedIn: 'root'  // hoeft door provideIn root niet meer in de module onder providers geplaatst te worden.
})
export class MoviesService{
  constructor(private http: HttpClient){}

  getAll():Observable<any>{
    return this.http.get('./assets/movies.json');
  }
}