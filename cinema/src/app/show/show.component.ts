import { Component, OnInit } from '@angular/core';
import { ShowsHttpService } from '../shows-http.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Movie } from '../Movie';
import { Show } from '../Show';
import { Rooms } from '../rooms'
import { AddShowComponent } from '../add-show/add-show.component';
import { EditShowComponent } from '../edit-show/edit-show.component';
import { MoviesHttpService } from '../movies-http.service';
import { Room } from '../Room';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [ShowsHttpService, MoviesHttpService]
})
export class ShowComponent implements OnInit {
  showId: any;
  show: Show;
  showList: Show[] = [];
  movieList: Movie[] = [];
  rooms = Rooms;
  newShow: Show;
  selectedShow: any = null;

  edit_movie: Movie;
  edit_date: Date;
  edit_hour: number;
  edit_minute: number;
  edit_room: Room;

  today: Date = new Date();
  todayYear: any;
  todayMonth: any;
  todayDay: any;
  todayDate: any;
  maxDate: any;

  hourList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minuteList: number[] = [0, 15, 30, 45];


  constructor(public dialog: MatDialog, private movieService: MoviesHttpService, private showService: ShowsHttpService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => this.showId = params.get('id'));
    this.showService.getShowById(this.showId).subscribe(show => this.show = show)
    this.movieService.getMovies().subscribe(movieList => this.movieList = movieList)

    this.todayYear = this.today.getFullYear();
    this.todayMonth = this.today.getMonth() + 1;
    this.todayDay = this.today.getDate();

    if (this.todayDay < 10)
      this.todayDay = '0' + this.todayDay;

    if (this.todayMonth < 10)
      this.todayMonth = '0' + this.todayMonth;

    this.todayDate = this.todayYear + "-" + this.todayMonth + "-" + this.todayDay
    this.maxDate = (this.todayYear + 1) + "-" + this.todayMonth + "-" + this.todayDay
  }

  ngOnInit(): void {
  }

  editShow() {
    let dialogRef = this.dialog.open(EditShowComponent, {
      width: '30%',
      data: {id: this.show.id, movie: this.movieList.find(m => this.show.movieId === m.id), room: this.rooms.find(r => this.show.roomNumber === r.roomNumber), date: new Date(this.show.dateYear, this.show.dateMonth, this.show.dateDay), hour: this.show.hour, minute: this.show.minute, movieList: this.movieList}
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        let resultDate = new Date(result.date)
        this.newShow = new Show(this.show.id, result.movie.id, result.movie.title, result.movie.year, result.movie.duration, result.room.roomNumber, result.room.rows * result.room.seatsInRow, resultDate.getFullYear(), resultDate.getMonth() + 1, resultDate.getDate(), result.hour, result.minute)
        this.showService.editShow(this.newShow)
      }
    })
  }

  deleteShow(): void {
    this.showService.deleteShow(this.show);
  }
}
