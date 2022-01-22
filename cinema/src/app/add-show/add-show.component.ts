import { Component, Inject, OnInit } from '@angular/core';
import { Rooms } from '../rooms';
import { Movie } from '../Movie';
import { Show } from '../Show';
import { MoviesHttpService } from '../movies-http.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from '../Room';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css'],
  providers: [MoviesHttpService]
})

export class AddShowComponent implements OnInit {
  movieList: Movie[] = [];
  today: Date = new Date();
  todayYear: any;
  todayMonth: any;
  todayDay: any;
  todayDate: any;
  maxDate: any;
  hourList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minuteList: number[] = [0, 15, 30, 45];
  roomsList = Rooms;

  constructor(private movieService: MoviesHttpService, public dialogRef: MatDialogRef<AddShowComponent>, @Inject(MAT_DIALOG_DATA) public data: {id: number, movie: Movie, room: Room, date: Date, hour: number, minute: number}) {
    this.movieService.getMovies().subscribe(movieList => this.movieList = movieList);

    this.todayYear = this.today.getFullYear();
    this.todayMonth = this.today.getMonth() + 1;
    this.todayDay = this.today.getDate();

    if (this.todayDay < 10)
      this.todayDay = '0' + this.todayDay;

    if (this.todayMonth < 10)
      this.todayMonth = '0' + this.todayMonth;

      this.todayDate = this.todayYear + "-" + this.todayMonth + "-" + this.todayDay
      this.maxDate = (this.todayYear + 1) + "-" + this.todayMonth + "-" + this.todayDay
    console.log(this.todayDate)
    console.log(this.maxDate)
  }

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
}
}
