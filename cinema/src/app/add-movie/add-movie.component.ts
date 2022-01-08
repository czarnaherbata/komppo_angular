import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../Movie';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  yearSelectList: number[] = [];
  constructor(public dialogRef: MatDialogRef<AddMovieComponent>, @Inject(MAT_DIALOG_DATA) public data: Movie)
  {
      this.yearSelectList = Array(((new Date()).getFullYear()) - 1899).fill(0).map((x,i)=>i + 1900);
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
      this.dialogRef.close();
  }

}
