import { Component, OnInit } from '@angular/core';
import { Show } from '../Show';
import { Shows } from "../shows-mock";
import { Rooms } from '../rooms-mock'
import { AddShowComponent } from '../add-show/add-show.component'
import { EditShowComponent } from '../edit-show/edit-show.component'
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  showList = Shows;
  selectedShow: any = null;
  headers: string[] = [];
  selected = false;
  newShow: Show;
  constructor(public dialog: MatDialog) {
      
  }

  ngOnInit(): void {
  }

  openDialog(add: boolean, edit: boolean, clickedShow: Show): void {
      let dialogRef = null;

      if (add) {
          dialogRef = this.dialog.open(AddShowComponent, {
              width: '30%',
              data: {}
          })
      }

      if (edit) {
          this.selectedShow = clickedShow;
          dialogRef = this.dialog.open(EditShowComponent, {
              width: '30%',
              data: {}
          })
        }

        dialogRef?.afterClosed().subscribe(result => {
            if (result !== undefined) {
                // this.newShow = new Show()
            }
        })

  }
}
