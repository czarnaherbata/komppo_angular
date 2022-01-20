import { Injectable } from '@angular/core';
import { Movie } from './Movie';
import { Movies } from './movie-mock';
import { Shows } from './shows-mock';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  movies=Movies;
  shows=Shows;

  

  constructor() {
   }
   getMovies(): Movie[]{
     return this.movies;
   }
   addMovie(movie: Movie){
     this.movies.push(movie)
   }
   editMovie(movie:Movie, selected: Movie){
     this.movies.forEach((obj, index, tab)=>{
       if(obj===selected){
         tab[index]=movie;
       }
     })
     
   }
   deleteMovie(movie:Movie){
     this.movies=this.movies.filter(obj=>obj!==movie)
     
   }
}
