import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../Movie';
import { Show } from '../Show';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css']
})
export class DeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: {type: boolean, can_delete: boolean, title: String, hour?: number, minute?: number}) { }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }
}
