import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './Movie';
import { Show } from './Show';

@Injectable({
  providedIn: 'root'
})
export class ShowsHttpService {
  url = 'http://localhost:3000/shows'
  constructor(private http: HttpClient) {
  }

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.url).pipe(catchError(this.handleError<Show[]>('getShows', [])));
  }

  addShow(show: Show): Observable<Show> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post<Show>(this.url, show, httpOptions).pipe(catchError(this.handleError<Show>('addShow')));
  }

  deleteShow(show: Show): Observable<unknown> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.delete<Show>(this.url + '/' + show.id, httpOptions).pipe(catchError(this.handleError<unknown>('deleteShow')))
  }

  editShow(show: Show): Observable<Show> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.put<Show>(this.url + '/' + show.id, show, httpOptions).pipe(catchError(this.handleError<Show>('editShow')))
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation + ' failed' + error);
      return of(result as T);
    };
  }
}
