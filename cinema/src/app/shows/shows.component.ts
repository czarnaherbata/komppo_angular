import { Component, Inject, OnInit } from '@angular/core';
import { Show } from '../Show';
import { Rooms } from '../rooms'
import { Movie } from '../Movie';
import { AddShowComponent } from '../add-show/add-show.component'
import { EditShowComponent } from '../edit-show/edit-show.component'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MoviesHttpService } from '../movies-http.service';
import { Router } from '@angular/router';
import { ImplicitReceiver } from '@angular/compiler';
import { ShowsHttpService } from '../shows-http.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers: [MoviesHttpService, ShowsHttpService]
})
export class ShowsComponent implements OnInit {
  showList: Show[] = [];
  movieList: Movie[] = [];
  rooms = Rooms;
  selectedShow: any = null;
  headers: string[] = [];
  selected = false;
  newShow: Show;
  lastShowId = 0;

  constructor(private movieService: MoviesHttpService, private showService: ShowsHttpService, public dialog: MatDialog, private router: Router) {
    this.movieService.getMovies().subscribe(movieList => this.movieList = movieList);
    this.showService.getShows().subscribe(showList => this.showList = showList);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = null;
    dialogRef = this.dialog.open(AddShowComponent, {
      width: '30%',
      data: { movie: '', room: '', date: '', hour: '', minute: '', movieList: this.movieList }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        let resultDate = new Date(result.date)
        this.newShow = new Show(this.lastShowId + 1, result.movie.id, result.movie.title, result.movie.year, result.movie.duration, result.room.roomNumber, result.room.rows * result.room.seatsInRow, resultDate.getFullYear(), resultDate.getMonth() + 1, resultDate.getDate(), result.hour, result.minute)
        this.showService.addShow(this.newShow).subscribe(result => this.showList.push(this.newShow));
        this.lastShowId++;
      }
    })
  }

  openShow(show: Show) {
    this.router.navigate(['show/' + show.id]);
  }

  deleteShow(showToDelete: Show): void {
    if (showToDelete.id === this.lastShowId)
      this.lastShowId--;

    this.showService.deleteShow(showToDelete).subscribe(result => this.showList = this.showList.filter(obj => obj !== showToDelete));
  }

  editShow(show: Show) {
    let dialogRef = this.dialog.open(EditShowComponent, {
      width: '30%',
      data: {id: show.id, movie: this.movieList.find(m => show.movieId === m.id), room: this.rooms.find(r => show.roomNumber === r.roomNumber), date: new Date(show.dateYear, show.dateMonth, show.dateDay), hour: show.hour, minute: show.minute, movieList: this.movieList}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        let resultDate = new Date(result.date)
        this.newShow = new Show(show.id, result.movie.id, result.movie.title, result.movie.year, result.movie.duration, result.room.roomNumber, result.room.rows * result.room.seatsInRow, resultDate.getFullYear(), resultDate.getMonth() + 1, resultDate.getDate(), result.hour, result.minute)
        this.showService.editShow(this.newShow).subscribe(result => this.showService.getShows())

        this.showList.forEach((obj, index, tab) => {
          if (obj === show) {
            tab[index] = this.newShow;
          }
        })
      }
    })
  }

  calculateLastShowId(): void {
    for (let show of this.showList) {
      if (show.id > this.lastShowId)
        this.lastShowId = show.id
    }
  }
}



