import { Component, Inject, OnInit } from '@angular/core';
import { Show } from '../Show';
import { Rooms } from '../rooms'
import { Movie } from '../Movie';
import { AddShowComponent } from '../add-show/add-show.component'
import { EditShowComponent } from '../edit-show/edit-show.component'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MoviesHttpService } from '../movies-http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  providers: [MoviesHttpService]
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

  constructor(private movieService: MoviesHttpService, public dialog: MatDialog, private router: Router) {
    this.movieService.getMovies().subscribe(movieList => this.movieList = movieList);
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    let dialogRef = null;
    dialogRef = this.dialog.open(AddShowComponent, {
      width: '30%',
      data: { movie: '', room: '', date: '', hour: '', minute: '' }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        this.newShow = new Show(this.lastShowId, result.movie.id, result.movie.title, result.movie.year, result.movie.duration, result.room.roomNumber, result.room.rows * result.room.seatsInRow, new Date(result.date), result.hour, result.minute)
        this.showList.push(this.newShow);
        calculateLastShowId();
      }
    })
  }

  openShow(show: Show) {
    this.router.navigate(['show/' + show.id]);
  }

  deleteShow(showToDelete: Show): void {
    this.showList = this.showList.filter(obj => obj !== showToDelete);
  }
}
function calculateLastShowId() {
  
}

