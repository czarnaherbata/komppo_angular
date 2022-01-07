import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie-mock';
import { Movie } from '../Movie';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movieList=Movies;
headers:string[]=[];
//selectedMovie: Movie=null;
//selectedMovie : Movie=null;

  constructor() {
    this.movieList.forEach(el=>{
      const keys=Object.keys(el);
      keys.forEach(key=>{
        if(!this.headers.includes(key)){
          console.log(key);
          this.headers.push(key)
        }
      })
    })
   }

  ngOnInit(): void {
  
   }
 

}
