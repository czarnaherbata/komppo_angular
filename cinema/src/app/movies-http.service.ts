import { getLocaleMonthNames } from '@angular/common';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {
  url='http://localhost:3000/movies'
  constructor(private http:HttpClient ) {
   }

   getMovies():Observable<Movie[]>
   {
    return this.http.get<Movie[]>(this.url).pipe(catchError(this.handleError<Movie[]>('getMovies', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
