import { Component, OnInit } from '@angular/core';
import { Movies } from '../movie-mock';
import { Movie } from '../Movie';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { NotExpr } from '@angular/compiler';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EditMovieComponent } from '../edit-movie/edit-movie.component';
import { MoviesHttpService } from '../movies-http.service';
import { ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { ShowsHttpService } from '../shows-http.service';
import { Show } from '../Show';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MoviesHttpService, ShowsHttpService]
})
export class MovieComponent implements OnInit {
  movieList: Movie[] = [];
  showList: Show[] = []
  selectedMovie: any = null;
  selected = false;
  newMovie: Movie;
  lastMovieId = 0;

  constructor(public dialog: MatDialog, private movieService: MoviesHttpService, private showService: ShowsHttpService, private route: ActivatedRoute) {
    this.movieService.getMovies().subscribe(movieList => {
      this.movieList = movieList;
      this.calculateLastMovieId();
    });
    this.showService.getShows().subscribe(showList => this.showList = showList);
  }

  ngOnInit(): void { }

  calculateLastMovieId() {
    for (let movie of this.movieList) {
      if (movie.id > this.lastMovieId)
        this.lastMovieId = movie.id
    }
  }

  openDialog(add: boolean, edit: boolean, clickedMovie: Movie): void {
    let dialogRef = null;

    if (add) {
      dialogRef = this.dialog.open(AddMovieComponent, {
        width: '30%',
        data: { id: '', title: '', duration: '', year: '' }
      });
    }

    if (edit) {
      this.selectedMovie = clickedMovie
      dialogRef = this.dialog.open(EditMovieComponent, {
        width: '30%',
        data: {
          id: this.selectedMovie.id, title: this.selectedMovie.title, duration: this.selectedMovie.duration, year: this.selectedMovie.year
        }
      });
    }

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (add) {
          this.newMovie = new Movie(this.lastMovieId + 1, result.title, result.duration, result.year)
          this.movieService.addMovie(this.newMovie).subscribe(result => this.movieList.push(this.newMovie));
          this.lastMovieId++;
        }
        if (edit) {
          this.newMovie = new Movie(this.selectedMovie.id, result.title, result.duration, result.year)
          this.movieService.editMovie(this.newMovie).subscribe(result => this.movieService.getMovies());

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

  deleteDialog(movieToDelete: Movie): void {
    let can_delete = true, title = movieToDelete.title;

    for (let show of this.showList) {
      if (show.movieId === movieToDelete.id)
        can_delete = false;
    }

    let dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '30%',
      data: { type: true, can_delete: can_delete, title: title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result)
        this.movieService.deleteMovie(movieToDelete).subscribe(result => this.movieList = this.movieList.filter(obj => obj !== movieToDelete));
    });
  }

  deleteMovie(movieToDelete: Movie): void {
    // let dialogRef = this.dialog.open()
    console.log('delete' + movieToDelete.title);

    if (movieToDelete.id === this.lastMovieId)
      this.lastMovieId--;

    this.movieService.deleteMovie(movieToDelete).subscribe(result => this.movieList = this.movieList.filter(obj => obj !== movieToDelete));
  }
}
