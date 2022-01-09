import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../Movie';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  yearSelectList: number[] = [];
  constructor(public dialogRef: MatDialogRef<EditMovieComponent>, @Inject(MAT_DIALOG_DATA) public data: Movie)
  {
    this.yearSelectList = Array(((new Date()).getFullYear()) - 1899).fill(0).map((x,i)=>i + 1900);
  }

  ngOnInit(): void {
    console.log('edit', this.data)
  }

  onNoClick() : void {
    this.dialogRef.close();
  }
}
