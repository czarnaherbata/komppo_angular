import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Show } from '../Show';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { Movie } from '../Movie';
import { AddShowComponent } from '../add-show/add-show.component';
import { Room } from '../Room';
import { Rooms } from '../rooms';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css']
})
export class EditShowComponent implements OnInit {
  today: Date = new Date();
  todayYear: any;
  todayMonth: any;
  todayDay: any;
  todayDate: any;
  maxDate: any;
  showDate: any;
  hourList: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  minuteList: number[] = [0, 15, 30, 45];
  roomsList = Rooms;
  
  constructor(public dialogRef: MatDialogRef<AddShowComponent>, @Inject(MAT_DIALOG_DATA) public data: {id: number, movie: Movie, room: Room, date: Date, hour: number, minute: number, movieList: Movie[]}) {
    this.todayYear = this.today.getFullYear();
    this.todayMonth = this.today.getMonth() + 1;
    this.todayDay = this.today.getDate();

    this.showDate = data.date.getFullYear() + "-" + (data.date.getMonth() + 1) + data.date.getDate()

    if (this.todayDay < 10)
      this.todayDay = '0' + this.todayDay;

    if (this.todayMonth < 10)
      this.todayMonth = '0' + this.todayMonth;

      this.todayDate = this.todayYear + "-" + this.todayMonth + "-" + this.todayDay
      this.maxDate = (this.todayYear + 1) + "-" + this.todayMonth + "-" + this.todayDay
  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
