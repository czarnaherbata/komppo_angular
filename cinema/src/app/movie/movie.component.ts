import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie-mock';
import { Movie } from '../Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NotExpr } from '@angular/compiler';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movieList=Movies;
headers:string[]=[];
  newMovie: Movie;
//selectedMovie: Movie=null;
//selectedMovie : Movie=null;

  constructor( public dialog: MatDialog) {
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
openDialog(): void{
  let dialogRef=null;
  dialogRef=this.dialog.open(AddMovieComponent, {
    width: '30%',
    data:{title: '', duration: '', year: ''}
  });
  dialogRef.afterClosed().subscribe((result: { year: string | number | Date; title: string; duration: string; } | undefined)=>{
    if(result!==undefined){
      if(result.year===''){
        result.year=new Date();
        
      }
      this.newMovie=new Movie(result.title, result.duration, new Date(result.year));
      this.movieList.push(this.newMovie)
    }
  })
} 

}
