import { getLocaleMonthNames } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesHttpService {
  url = 'http://localhost:3000/movies'
  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.url).pipe(catchError(this.handleError<Movie[]>('getMovies', [])));
  }

  addMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Movie>(this.url, movie, httpOptions).pipe(catchError(this.handleError<Movie>('addMovie')));
  }

  deleteMovie(movie: Movie): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.delete<Movie>(this.url + '/' + movie.id, httpOptions).pipe(catchError(this.handleError<unknown>('deleteMovie')))
  }

  editMovie(movie: Movie): Observable<Movie> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Movie>(this.url + '/' + movie.id, movie, httpOptions).pipe(catchError(this.handleError<Movie>('editMovie')))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
