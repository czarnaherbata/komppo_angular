import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie-mock';
import { Movie } from '../Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NotExpr } from '@angular/compiler';
import { MatDialog } from '@angular/material/dialog';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
movieList=Movies;
selectedMovie: Movie = null;
  headers: string[] = [];
  selected = false;
 // newMovie: Movie;
//selectedMovie: Movie=null;
//selectedMovie : Movie=null;
newMovie: Movie | undefined;
constructor(public dialog: MatDialog) {
  this.movieList.forEach(el => {
    const keys = Object.keys(el);
    keys.forEach(key => {
      if (!this.headers.includes(key)) {
        if (key !== 'amount') {
          this.headers.push(key);
        }
      }
    });
  });
}

  ngOnInit(): void {
  
   }
   openDialog(add: boolean, edit: boolean): void {
    let dialogRef = null;
    if (add) {
      dialogRef = this.dialog.open(AddMovieComponent, {
        width: '30%',
        data: { title: '', duration: '', year: '' }
      });
    }
    if (edit) {
      dialogRef = this.dialog.open(EditMovieComponent, {
        width: '30%',
        data: {
          title: this.selectedMovie.title, category: this.selectedMovie.duration, content: this.selectedMovie.year
        }
      });
    }


  }


}
