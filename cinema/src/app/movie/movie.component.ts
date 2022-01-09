import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie-mock';
import { Movie } from '../Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NotExpr } from '@angular/compiler';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movieList = Movies;
  selectedMovie: any = null;
  headers: string[] = [];
  selected = false;
  newMovie: Movie;
//selectedMovie: Movie=null;
//selectedMovie : Movie=null;
//newMovie: Movie | any;
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
//    openDialog(add: boolean, edit: boolean): void {
//     let dialogRef = null;
//     if (add) {
//       dialogRef = this.dialog.open(AddMovieComponent, {
//         width: '30%',
//         data: { title: '', duration: '', year: '' }
//       });
//     }
//     if (edit) {
//       dialogRef = this.dialog.open(EditMovieComponent, {
//         width: '30%',
//         data: {
//           title: this.selectedMovie.title, category: this.selectedMovie.duration, content: this.selectedMovie.year
//         }
//       });
//     }


//   }
   openDialog(add: boolean, edit: boolean, clickedMovie: Movie): void {
       let dialogRef = null;

       if (add) {
        dialogRef = this.dialog.open(AddMovieComponent, {
          width: '30%',
          data: { title: '', duration: '', year: '' }
        });
       }
       
       if (edit) {
        this.selectedMovie = clickedMovie
        dialogRef = this.dialog.open(EditMovieComponent, {
          width: '30%',
          data: {
            title: this.selectedMovie.title, duration: this.selectedMovie.duration, year: this.selectedMovie.year
          }
        });
       }

        dialogRef.afterClosed().subscribe(result => {
          if (result !== undefined) {
            this.newMovie = new Movie(result.title, result.duration, result.year)

            if (add) {
              this.movieList.push(this.newMovie)
            }
            if (edit) {
              this.movieList.forEach((obj, index, tab) => {
                if (obj === this.selectedMovie) {
                  tab[index] = this.newMovie;
                  this.selectedMovie = tab[index];
                }
              });
            }
              
          }
      })
}
deleteMovie(movie: Movie): void{

  this.movieList=this.movieList.splice(this.movieList.indexOf(movie));
 // this.selectedMovie=null;
  
}


}
