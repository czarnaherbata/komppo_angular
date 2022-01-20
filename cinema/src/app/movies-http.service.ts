import { getLocaleMonthNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './Movie';
import { Movies } from './movie-mock';


@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {

  
  url='http://localhost:4200'
  constructor(private http:HttpClient ) {
   }
   getMovies():Observable<Movie[]>
   {
     return this.http.get<Movie[]>(this.url+'/notes').pipe(map(movies:Movie[])=>
     movies.map(movie));
   }
}
